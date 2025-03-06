import { useState } from 'react'
import SideNav from './components/SideNav'
import TicketTable from './components/TicketTable'
import TicketModal from './components/TicketModal'
import FilterControls from './components/FilterControls'
import { Ticket, TicketForm } from './types'

export default function App() {
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: 1,
      title: 'Printer not working',
      description: 'The office printer is not responding',
      status: 'open',
      priority: 'high',
      createdAt: '2024-01-15'
    }
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [filterStatus, setFilterStatus] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const validateForm = (ticket: TicketForm) => {
    const newErrors: Record<string, string> = {}
    if (!ticket.title.trim()) newErrors.title = 'Title is required'
    if (!ticket.description.trim()) newErrors.description = 'Description is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleCreateTicket = (ticket: TicketForm) => {
    if (!validateForm(ticket)) return
    
    setTickets([
      ...tickets,
      {
        id: tickets.length + 1,
        ...ticket,
        status: 'open',
        createdAt: new Date().toISOString().split('T')[0]
      }
    ])
    setIsModalOpen(false)
    setErrors({})
  }

  const handleStatusChange = (id: number, status: string) => {
    setTickets(tickets.map(t => 
      t.id === id ? { ...t, status } : t
    ))
  }

  const filteredTickets = tickets.filter(ticket => {
    const statusMatch = filterStatus === 'all' || ticket.status === filterStatus
    const searchMatch = ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase())
    return statusMatch && searchMatch
  })

  return (
    <div className="min-h-screen flex">
      <SideNav onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-1 p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">Ticket Management</h2>
        <FilterControls
          filterStatus={filterStatus}
          searchQuery={searchQuery}
          onFilterChange={setFilterStatus}
          onSearchChange={setSearchQuery}
          onOpenModal={() => setIsModalOpen(true)}
        />
        <TicketTable
          tickets={filteredTickets}
          onStatusChange={handleStatusChange}
        />
        <TicketModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateTicket}
          errors={errors}
        />
      </main>
    </div>
  )
}

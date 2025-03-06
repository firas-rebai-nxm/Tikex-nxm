import { useState } from 'react'
import { TicketForm } from '../types'

interface TicketModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (ticket: TicketForm) => void
  errors: Record<string, string>
}

export default function TicketModal({ isOpen, onClose, onSubmit, errors }: TicketModalProps) {
  const [ticket, setTicket] = useState<TicketForm>({
    title: '',
    description: '',
    priority: 'medium'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(ticket)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">Create New Ticket</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Title</label>
              <input
                type="text"
                value={ticket.title}
                onChange={(e) => setTicket({ ...ticket, title: e.target.value })}
                className={`w-full p-2 border rounded-lg ${errors.title ? 'border-red-500' : ''}`}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>
            <div>
              <label className="block mb-1">Description</label>
              <textarea
                value={ticket.description}
                onChange={(e) => setTicket({ ...ticket, description: e.target.value })}
                className={`w-full p-2 border rounded-lg ${errors.description ? 'border-red-500' : ''}`}
                rows="3"
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>
            <div>
              <label className="block mb-1">Priority</label>
              <select
                value={ticket.priority}
                onChange={(e) => setTicket({ ...ticket, priority: e.target.value })}
                className="w-full p-2 border rounded-lg"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Create Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

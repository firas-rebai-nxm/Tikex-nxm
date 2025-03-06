import { Ticket } from '../types'

interface TicketTableProps {
  tickets: Ticket[]
  onStatusChange: (id: number, status: string) => void
}

export default function TicketTable({ tickets, onStatusChange }: TicketTableProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Priority</th>
            <th className="p-3 text-left">Created</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id} className="border-t">
              <td className="p-3">{ticket.title}</td>
              <td className="p-3">
                <select
                  value={ticket.status}
                  onChange={(e) => onStatusChange(ticket.id, e.target.value)}
                  className="p-1 border rounded"
                >
                  <option value="open">Open</option>
                  <option value="in progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </td>
              <td className="p-3 capitalize">{ticket.priority}</td>
              <td className="p-3">{ticket.createdAt}</td>
              <td className="p-3">
                <button className="text-blue-500 hover:text-blue-700">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

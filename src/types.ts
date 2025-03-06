export interface Ticket {
  id: number
  title: string
  description: string
  status: string
  priority: string
  createdAt: string
}

export interface TicketForm {
  title: string
  description: string
  priority: string
}

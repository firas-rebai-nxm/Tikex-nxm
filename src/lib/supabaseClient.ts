import { createClient } from '@supabase/supabase-js'
import { Ticket } from '../types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function fetchTickets(): Promise<Ticket[]> {
  const { data, error } = await supabase
    .from('tickets')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching tickets:', error)
    throw error
  }

  return data.map(ticket => ({
    id: ticket.id,
    title: ticket.title,
    description: ticket.description,
    status: ticket.status,
    priority: ticket.priority,
    createdAt: ticket.created_at
  }))
}

export async function createTicket(ticket: Ticket): Promise<Ticket> {
  const { data, error } = await supabase
    .from('tickets')
    .insert({
      title: ticket.title,
      description: ticket.description,
      status: ticket.status,
      priority: ticket.priority
    })
    .single()

  if (error) {
    console.error('Error creating ticket:', error)
    throw error
  }

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    status: data.status,
    priority: data.priority,
    createdAt: data.created_at
  }
}

export async function updateTicketStatus(id: number, status: string): Promise<void> {
  const { error } = await supabase
    .from('tickets')
    .update({ status })
    .eq('id', id)

  if (error) {
    console.error('Error updating ticket status:', error)
    throw error
  }
}

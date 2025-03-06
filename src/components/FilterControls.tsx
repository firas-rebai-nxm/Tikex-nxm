interface FilterControlsProps {
  filterStatus: string
  searchQuery: string
  onFilterChange: (status: string) => void
  onSearchChange: (query: string) => void
  onOpenModal: () => void
}

export default function FilterControls({
  filterStatus,
  searchQuery,
  onFilterChange,
  onSearchChange,
  onOpenModal
}: FilterControlsProps) {
  return (
    <div className="mb-6 flex gap-4">
      <select
        value={filterStatus}
        onChange={(e) => onFilterChange(e.target.value)}
        className="p-2 border rounded-lg"
      >
        <option value="all">All Statuses</option>
        <option value="open">Open</option>
        <option value="in progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
      <input
        type="text"
        placeholder="Search tickets..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="p-2 border rounded-lg flex-1"
      />
      <button
        onClick={onOpenModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Create Ticket
      </button>
    </div>
  )
}

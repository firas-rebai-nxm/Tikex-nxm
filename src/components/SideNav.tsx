import { Home, Settings, User, LogOut, Ticket } from 'lucide-react'

interface SideNavProps {
  onOpenModal: () => void
}

export default function SideNav({ onOpenModal }: SideNavProps) {
  return (
    <nav className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      </div>
      <div className="flex-1">
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5 mr-3" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Ticket className="w-5 h-5 mr-3" />
              <span>Tickets</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <User className="w-5 h-5 mr-3" />
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5 mr-3" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <LogOut className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  )
}

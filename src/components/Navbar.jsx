import { CalendarDays, User, BarChart3 } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white">
            <CalendarDays size={20} />
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">Campus Events</p>
            <p className="text-xs text-gray-500">Manage fests, workshops & more</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
          <a href="#students" className="hover:text-blue-600">Students</a>
          <a href="#organizers" className="hover:text-blue-600">Organizers</a>
          <a href="#admin" className="hover:text-blue-600">Admin</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <User size={16} />
            Sign In
          </button>
          <button className="hidden items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 md:inline-flex">
            <BarChart3 size={16} />
            Analytics
          </button>
        </div>
      </div>
    </header>
  )
}

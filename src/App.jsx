import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import EventFilters from './components/EventFilters'
import EventsGrid from './components/EventsGrid'
import AnalyticsPreview from './components/AnalyticsPreview'

const MOCK_EVENTS = [
  {
    id: 1,
    title: 'AI & ML Hackathon',
    category: 'Competition',
    date: '2025-11-20',
    venue: 'Innovation Lab',
    organizer: 'CSE Club',
    status: 'approved',
    registrations: 120,
    department: 'CSE',
    rating: 4.6,
  },
  {
    id: 2,
    title: 'Robotics Workshop: Build Your First Bot',
    category: 'Workshop',
    date: '2025-11-25',
    venue: 'Mechanical Block - Hall 2',
    organizer: 'Mech Society',
    status: 'approved',
    registrations: 85,
    department: 'ME',
    rating: 4.3,
  },
  {
    id: 3,
    title: 'Cultural Fest: Rhythm & Roots',
    category: 'Fest',
    date: '2025-12-05',
    venue: 'Open Air Theater',
    organizer: 'Student Union',
    status: 'approved',
    registrations: 450,
    department: 'All',
    rating: 4.8,
  },
  {
    id: 4,
    title: 'Data Visualization with Python',
    category: 'Workshop',
    date: '2025-11-18',
    venue: 'CS Lab 3',
    organizer: 'Analytics Club',
    status: 'pending',
    registrations: 60,
    department: 'CSE',
    rating: 4.1,
  },
  {
    id: 5,
    title: 'Football Inter-Department Tournament',
    category: 'Sports',
    date: '2025-11-30',
    venue: 'Main Ground',
    organizer: 'Sports Committee',
    status: 'approved',
    registrations: 210,
    department: 'All',
    rating: 4.5,
  },
  {
    id: 6,
    title: 'Entrepreneurship 101: From Idea to MVP',
    category: 'Seminar',
    date: '2025-11-22',
    venue: 'Auditorium A',
    organizer: 'E-Cell',
    status: 'approved',
    registrations: 140,
    department: 'MBA',
    rating: 4.2,
  },
]

export default function App() {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    startDate: '',
    endDate: '',
  })

  const categories = useMemo(
    () => Array.from(new Set(MOCK_EVENTS.map((e) => e.category))),
    []
  )

  const filteredEvents = useMemo(() => {
    const like = (value, pattern) =>
      String(value).toLowerCase().includes(String(pattern).toLowerCase())

    const inRange = (dateStr, start, end) => {
      if (!start && !end) return true
      const d = new Date(dateStr).getTime()
      const s = start ? new Date(start).getTime() : -Infinity
      const e = end ? new Date(end).getTime() : Infinity
      return d >= s && d <= e
    }

    return MOCK_EVENTS.filter((e) => {
      const matchesSearch =
        !filters.search ||
        like(e.title, filters.search) ||
        like(e.venue, filters.search) ||
        like(e.organizer, filters.search)

      const matchesCategory = !filters.category || e.category === filters.category
      const matchesDate = inRange(e.date, filters.startDate, filters.endDate)

      return matchesSearch && matchesCategory && matchesDate
    })
  }, [filters])

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-indigo-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10">
        <section className="mb-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-md">
          <h1 className="text-2xl font-semibold md:text-3xl">College Events & Workshops Platform</h1>
          <p className="mt-2 max-w-2xl text-sm text-blue-100 md:text-base">
            Discover upcoming fests, workshops, and competitions. Students can register in a click,
            organizers manage participants, and admins monitor participation trends.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-blue-100">
            <span className="rounded-full bg-white/10 px-2 py-1">Search & filter</span>
            <span className="rounded-full bg-white/10 px-2 py-1">Register/Unregister</span>
            <span className="rounded-full bg-white/10 px-2 py-1">Organize events</span>
            <span className="rounded-full bg-white/10 px-2 py-1">Admin analytics</span>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <EventFilters
              filters={filters}
              onChange={setFilters}
              categories={categories}
            />
            <div className="mt-4">
              <EventsGrid events={filteredEvents} />
            </div>
          </div>
          <div className="lg:col-span-1">
            <AnalyticsPreview events={filteredEvents} />
          </div>
        </div>

        <section id="organizers" className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="mb-1 text-sm font-semibold text-gray-900">Create & Manage</h3>
            <p className="text-sm text-gray-600">Organizers can create, edit, and publish events with participant lists.</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="mb-1 text-sm font-semibold text-gray-900">Reports</h3>
            <p className="text-sm text-gray-600">Generate reports like top events and department-wise participation.</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="mb-1 text-sm font-semibold text-gray-900">Announcements</h3>
            <p className="text-sm text-gray-600">Send updates to registered participants instantly.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

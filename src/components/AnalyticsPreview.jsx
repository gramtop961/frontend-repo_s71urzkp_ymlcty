import { BarChart3, Trophy, Users, GraduationCap } from 'lucide-react'

export default function AnalyticsPreview({ events }) {
  // Simple computed insights from provided events
  const totalParticipants = events.reduce((sum, e) => sum + (e.registrations || 0), 0)
  const topEvents = [...events]
    .sort((a, b) => (b.registrations || 0) - (a.registrations || 0))
    .slice(0, 3)
  const avgRating = (
    events.reduce((sum, e) => sum + (e.rating || 0), 0) / (events.length || 1)
  ).toFixed(1)
  const uniqueDepartments = new Set(events.map((e) => e.department)).size

  return (
    <section id="admin" className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-700">
        <BarChart3 size={16} />
        <span>Admin Analytics Preview</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-1 flex items-center justify-between text-sm text-gray-600">
            <span>Total Participants</span>
            <Users size={16} />
          </div>
          <p className="text-2xl font-semibold text-gray-900">{totalParticipants}</p>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-1 flex items-center justify-between text-sm text-gray-600">
            <span>Avg. Feedback</span>
            <Trophy size={16} />
          </div>
          <p className="text-2xl font-semibold text-gray-900">{avgRating}</p>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-1 flex items-center justify-between text-sm text-gray-600">
            <span>Active Depts</span>
            <GraduationCap size={16} />
          </div>
          <p className="text-2xl font-semibold text-gray-900">{uniqueDepartments}</p>
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="mb-1 flex items-center justify-between text-sm text-gray-600">
            <span>Top Event</span>
            <Trophy size={16} />
          </div>
          <p className="line-clamp-2 text-sm font-medium text-gray-900">
            {topEvents[0] ? `${topEvents[0].title} (${topEvents[0].registrations})` : '—'}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="mb-2 text-sm font-medium text-gray-700">Top 3 by registrations</p>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {topEvents.map((e) => (
            <li key={e.id} className="rounded-md border border-gray-200 p-3 text-sm">
              <p className="font-semibold text-gray-900">{e.title}</p>
              <p className="text-gray-600">{e.registrations} participants</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

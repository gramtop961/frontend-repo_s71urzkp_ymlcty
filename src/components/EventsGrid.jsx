import { CalendarDays, MapPin, Users } from 'lucide-react'

function EventCard({ event }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            event.status === 'approved' ? 'bg-green-50 text-green-700 ring-1 ring-green-200' :
            event.status === 'pending' ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-200' :
            'bg-red-50 text-red-700 ring-1 ring-red-200'
          }`}>{event.status}</span>
          <span className="text-xs text-gray-500">{event.category}</span>
        </div>
        <h3 className="mb-1 line-clamp-2 text-lg font-semibold text-gray-900">{event.title}</h3>
        <p className="mb-3 text-sm text-gray-600">by {event.organizer}</p>
        <div className="mb-3 flex items-center gap-3 text-sm text-gray-700">
          <div className="flex items-center gap-1"><CalendarDays size={16} /> {event.date}</div>
          <div className="flex items-center gap-1"><MapPin size={16} /> {event.venue}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Users size={16} />
            <span>{event.registrations} registered</span>
          </div>
          <button className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700">Register</button>
        </div>
      </div>
    </div>
  )
}

export default function EventsGrid({ events }) {
  if (!events.length) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 p-10 text-center text-gray-600">
        No events match your filters.
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((e) => (
        <EventCard key={e.id} event={e} />
      ))}
    </div>
  )
}

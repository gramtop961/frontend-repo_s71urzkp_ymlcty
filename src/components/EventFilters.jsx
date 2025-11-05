import { Search, Filter } from 'lucide-react'

export default function EventFilters({ filters, onChange, categories }) {
  const handleInput = (key) => (e) => {
    onChange({ ...filters, [key]: e.target.value })
  }

  return (
    <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-700">
        <Filter size={16} />
        <span>Search & Filters</span>
      </div>
      <div className="grid gap-3 md:grid-cols-4">
        <div className="relative md:col-span-2">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            value={filters.search}
            onChange={handleInput('search')}
            placeholder="Search events, titles, venues..."
            className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm outline-none ring-blue-600 focus:ring"
          />
        </div>
        <select
          value={filters.category}
          onChange={handleInput('category')}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-blue-600 focus:ring"
        >
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="date"
            value={filters.startDate}
            onChange={handleInput('startDate')}
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-blue-600 focus:ring"
          />
          <input
            type="date"
            value={filters.endDate}
            onChange={handleInput('endDate')}
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-blue-600 focus:ring"
          />
        </div>
      </div>
    </section>
  )
}

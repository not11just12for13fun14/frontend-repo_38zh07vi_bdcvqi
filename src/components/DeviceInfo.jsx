import { Monitor, Laptop, Database } from 'lucide-react'

export default function DeviceInfo({ data }) {
  const stats = [
    { label: 'Total Devices', value: data?.total || 0 },
    { label: 'Installed', value: data?.installed || 0 },
    { label: 'Not Installed', value: data?.not_installed || 0 },
    { label: 'Laptops', value: data?.laptops || 0 },
    { label: 'Desktops', value: data?.desktops || 0 },
  ]

  const maxVal = Math.max(...stats.map(s => s.value), 1)

  return (
    <div className="p-6 bg-slate-800/50 border border-slate-700/60 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-slate-300" />
          <h3 className="text-slate-100 font-semibold">Device Info</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map(s => (
          <div key={s.label} className="bg-slate-900/40 rounded-xl p-4">
            <div className="text-slate-300 text-sm mb-2">{s.label}</div>
            <div className="h-24 flex items-end">
              <div className="w-full bg-indigo-500 rounded-md" style={{ height: `${(s.value / maxVal) * 100}%` }} />
            </div>
            <div className="mt-2 text-slate-50 font-semibold">{s.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h4 className="text-slate-200 text-sm font-medium mb-3">By Manufacturer</h4>
        <div className="flex items-end gap-3">
          {(data?.manufacturers || []).map(m => (
            <div key={m.manufacturer} className="flex-1">
              <div className="h-24 bg-teal-500/80 rounded" style={{ height: `${Math.max(10, (m.count / (data?.total || 1)) * 100)}%` }} />
              <div className="mt-2 text-xs text-slate-300 text-center truncate">{m.manufacturer}</div>
              <div className="text-center text-slate-50 text-sm">{m.count}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

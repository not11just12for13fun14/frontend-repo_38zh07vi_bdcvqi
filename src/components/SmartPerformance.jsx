import { BarChart3 } from 'lucide-react'

export default function SmartPerformance({ data }) {
  const items = [
    { label: 'Disk Reclaimed', value: data?.disk_reclaimed_count || 0, color: 'bg-emerald-500' },
    { label: 'Tune PC Fix', value: data?.tune_pc_fix_count || 0, color: 'bg-blue-500' },
    { label: 'Malware Fix', value: data?.malware_fix_count || 0, color: 'bg-rose-500' },
    { label: 'Internet Perf', value: data?.internet_performance_count || 0, color: 'bg-amber-500' },
  ]

  const max = Math.max(...items.map(i => i.value), 1)

  return (
    <div className="p-6 bg-slate-800/50 border border-slate-700/60 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-slate-300" />
          <h3 className="text-slate-100 font-semibold">Smart Performance</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.label} className="bg-slate-900/40 rounded-xl p-4">
            <div className="text-slate-300 text-sm mb-2">{item.label}</div>
            <div className="h-24 flex items-end">
              <div className={`w-full ${item.color} rounded-md`} style={{ height: `${(item.value / max) * 100}%` }} />
            </div>
            <div className="mt-2 text-slate-50 font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

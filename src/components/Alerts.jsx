import { AlertTriangle, Bell } from 'lucide-react'

export default function Alerts({ data }) {
  const critical = data?.critical || 0
  const warning = data?.warning || 0
  const total = Math.max(critical + warning, 1)

  const components = data?.by_component || []
  const maxComp = Math.max(...components.map(c => c.count), 1)

  return (
    <div className="p-6 bg-slate-800/50 border border-slate-700/60 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-slate-300" />
          <h3 className="text-slate-100 font-semibold">Alerts</h3>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Doughnut style (fake) */}
        <div className="bg-slate-900/40 rounded-xl p-4 flex items-center justify-center">
          <div className="relative w-40 h-40">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <path className="text-slate-700" strokeWidth="3.8" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="text-rose-500" strokeWidth="3.8" strokeDasharray={`${(critical/total)*100}, 100`} stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="text-amber-400" strokeWidth="3.8" strokeDasharray={`${(warning/total)*100}, 100`} strokeDashoffset={`${(critical/total)*100}`} stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <div className="text-center text-2xl font-bold text-slate-50">{critical+warning}</div>
                <div className="text-center text-xs text-slate-300">Total</div>
              </div>
            </div>
          </div>
          <div className="ml-6 space-y-2">
            <div className="flex items-center gap-2 text-slate-300 text-sm"><span className="inline-block w-3 h-3 bg-rose-500 rounded-sm"/> Critical: <span className="text-slate-50 font-semibold">{critical}</span></div>
            <div className="flex items-center gap-2 text-slate-300 text-sm"><span className="inline-block w-3 h-3 bg-amber-400 rounded-sm"/> Warning: <span className="text-slate-50 font-semibold">{warning}</span></div>
          </div>
        </div>

        {/* By component bars */}
        <div className="bg-slate-900/40 rounded-xl p-4">
          <div className="text-slate-300 text-sm mb-2">By Component</div>
          <div className="space-y-3">
            {components.map(c => (
              <div key={c.component}>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>{c.component}</span>
                  <span>{c.count}</span>
                </div>
                <div className="w-full bg-slate-700/50 h-2 rounded">
                  <div className="h-2 bg-sky-500 rounded" style={{ width: `${(c.count / maxComp) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top 5 list */}
        <div className="bg-slate-900/40 rounded-xl p-4">
          <div className="text-slate-300 text-sm mb-2">Top 5 Recent Alerts</div>
          <ul className="space-y-2 max-h-48 overflow-auto pr-2">
            {(data?.top5 || []).map(a => (
              <li key={a.id} className="p-3 rounded bg-slate-800/70 flex items-start gap-3">
                <AlertTriangle className={`w-4 h-4 mt-0.5 ${a.severity === 'critical' ? 'text-rose-500' : 'text-amber-400'}`} />
                <div>
                  <div className="text-slate-100 text-sm">{a.component} • {a.severity}</div>
                  <div className="text-slate-300 text-xs">{a.message}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

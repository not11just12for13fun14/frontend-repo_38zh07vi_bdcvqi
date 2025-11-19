import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[320px] sm:h-[380px] md:h-[440px] lg:h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative h-full bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-900 pt-10 md:pt-16 pointer-events-none"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow">UEM Dashboard</h1>
          <p className="mt-3 md:mt-4 text-slate-200 max-w-2xl mx-auto drop-shadow">
            Unified Endpoint Management insights at a glance — performance, devices, and alerts.
          </p>
        </div>
      </div>
    </section>
  )
}

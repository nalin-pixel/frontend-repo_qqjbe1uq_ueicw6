import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center" id="top">
      {/* 3D Globe */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft dark gradient to improve contrast while keeping interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.12),transparent_40%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-white mb-5 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Interactive 3D for offshore engineering & environment
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            2D/3D animations, technical graphics, and digital innovation for energy leaders
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-200/90">
            We design process-oriented visuals that explain complex offshore systems and environmental insights. Trusted by BP, ExxonMobil, Shell, Maersk, and Aramco.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-rose-500 to-red-600 text-white font-medium shadow-lg shadow-red-900/30">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10">
              See our work
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-300/80 text-sm">
            <p>Offshore ROV ops</p>
            <p>Subsea pipelines</p>
            <p>Metocean & environment</p>
            <p>Safety & training</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Menu, X, Rocket, Phone } from 'lucide-react';

function NavLink({ label, href }) {
  return (
    <a href={href} className="text-sm md:text-base text-slate-200 hover:text-white transition-colors">
      {label}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-900/30">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">Vantage Animations</p>
            <p className="text-xs text-slate-300 -mt-1">Engineering • Environment</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink label="Services" href="#services" />
          <NavLink label="Process" href="#process" />
          <NavLink label="Work" href="#work" />
          <NavLink label="Clients" href="#clients" />
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white transition-colors">
            <Phone className="w-4 h-4" />
            <span>Start a project</span>
          </a>
        </div>

        <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-2xl bg-slate-900/70 backdrop-blur border border-white/10 p-4 space-y-3">
            <NavLink label="Services" href="#services" />
            <div />
            <NavLink label="Process" href="#process" />
            <div />
            <NavLink label="Work" href="#work" />
            <div />
            <NavLink label="Clients" href="#clients" />
            <div />
            <a href="#contact" className="block text-center w-full px-4 py-2 rounded-lg bg-gradient-to-r from-rose-500 to-red-600 text-white">Start a project</a>
          </div>
        </div>
      )}
    </header>
  );
}

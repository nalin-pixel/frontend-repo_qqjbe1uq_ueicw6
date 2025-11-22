import { ArrowRight, ServerCog, Sparkles, BadgeCheck } from 'lucide-react';

const steps = [
  {
    title: 'Discovery & Scope',
    desc: 'We capture objectives, audiences, and technical sources. NDA-ready and comfortable with complex assets.'
  },
  {
    title: 'Data & CAD Ingest',
    desc: 'We import models, drawings, and environmental datasets, aligning formats and standards.'
  },
  {
    title: 'Animation & Lookdev',
    desc: 'We block sequences, iterate on shaders and lighting, and validate with SMEs.'
  },
  {
    title: 'Review & Delivery',
    desc: 'Secure review links, versioned exports, and handover packages for training and stakeholders.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Process</h2>
          <p className="mt-3 text-slate-300">A proven, collaborative pipeline tuned for offshore engineering and environmental narratives.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-5xl font-black text-white/10">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="text-white font-semibold mt-4">{s.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{s.desc}</p>
              {i !== steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

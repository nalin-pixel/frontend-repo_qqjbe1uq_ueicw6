import { Layers, Cube, Waves, Film, PenTool, Workflow } from 'lucide-react';

const services = [
  {
    icon: Cube,
    title: '3D Models & Digital Twins',
    desc: 'High-fidelity CAD-to-visual assets, rig systems, subsea infrastructure, and environment-aware scenes.'
  },
  {
    icon: Film,
    title: '2D/3D Technical Animation',
    desc: 'Process-driven storytelling for operations, safety, training, and stakeholder communication.'
  },
  {
    icon: Waves,
    title: 'Metocean & Environment',
    desc: 'Visualize currents, waves, wind, and environmental impact with data-informed animation.'
  },
  {
    icon: PenTool,
    title: 'Technical Graphics',
    desc: 'Exploded views, schematics, and procedural diagrams tailored for engineering teams.'
  },
  {
    icon: Layers,
    title: 'Geospatial & Mapping',
    desc: 'Site layouts, seabed mapping, bathymetry, pipelines, and field development visuals.'
  },
  {
    icon: Workflow,
    title: 'Process & Innovation',
    desc: 'Design sprints for digital services, workflows, and innovation initiatives.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.08),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
          <p className="mt-3 text-slate-300">From subsea to surface, we translate engineering into visuals that drive clarity and action.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-slate-300 mt-2 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

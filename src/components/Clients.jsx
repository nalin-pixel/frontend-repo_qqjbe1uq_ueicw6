const logos = [
  'BP', 'ExxonMobil', 'Shell', 'Maersk', 'Aramco', 'TotalEnergies'
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Trusted by global energy leaders</h2>
          <p className="mt-3 text-slate-300">Experience across operators, service companies, and consultancies.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {logos.map(name => (
            <div key={name} className="h-16 rounded-xl border border-white/10 bg-white/5 backdrop-blur flex items-center justify-center text-slate-300">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

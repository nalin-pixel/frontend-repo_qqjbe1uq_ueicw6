export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Have a complex story to tell?</h3>
              <p className="mt-3 text-slate-300">We translate engineering detail into clear visuals. Tell us about your challenge and timeline.</p>
              <ul className="mt-4 text-slate-300/90 text-sm list-disc pl-5 space-y-1">
                <li>Secure, NDA-ready collaboration</li>
                <li>We handle CAD, GIS, and datasets</li>
                <li>Agile delivery with frequent reviews</li>
              </ul>
            </div>
            <form className="space-y-4">
              <input className="w-full px-4 py-3 rounded-lg bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-400" placeholder="Name" />
              <input className="w-full px-4 py-3 rounded-lg bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-400" placeholder="Company" />
              <input className="w-full px-4 py-3 rounded-lg bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-400" placeholder="Email" />
              <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-900/70 border border-white/10 text-white placeholder:text-slate-400" placeholder="Project brief" />
              <button type="button" className="w-full md:w-auto px-5 py-3 rounded-lg bg-gradient-to-r from-rose-500 to-red-600 text-white font-medium">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Clients from './components/Clients';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Clients />
      <CTA />
      <footer className="py-10 text-center text-slate-400 bg-slate-950">
        © {new Date().getFullYear()} Vantage Animations. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { Stats } from '@/sections/Stats';
import { HydraulicExcellence } from '@/sections/HydraulicExcellence';
import { Operations } from '@/sections/Operations';
import { Clients } from '@/sections/Clients';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-industrial-dark text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <HydraulicExcellence />
        <Operations />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

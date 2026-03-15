import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Research } from './components/Research';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="dark bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Research />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

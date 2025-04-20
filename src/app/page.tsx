import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      {/* Contenido principal aquí */}
      <h2 className="text-center text-2xl font-bold mt-8">Bienvenido al Portafolio Next.js</h2>
      {/* Aquí se irán integrando las siguientes secciones migradas */}
    </main>
  );
}

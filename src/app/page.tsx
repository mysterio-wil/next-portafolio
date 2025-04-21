import Title from '../components/Title';
import About from '../components/About';
import Skills from '../components/Skills';
import Hobbies from '../components/Hobbies';
import Academic from '../components/Academic';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Title />
      <About />
      <Skills />
      <Hobbies />
      <Academic />
      <Experience />
      <Contact />
    </main>
  );
}

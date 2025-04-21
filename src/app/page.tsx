import Menu from '../components/Menu';
import Title from '../components/Title';
import About from '../components/About';
import Skills from '../components/Skills';
import Hobbies from '../components/Hobbies';
import Academic from '../components/Academic';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Menu />
      <Title />
      <About />
      <Skills />
      <Hobbies />
      <Academic />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

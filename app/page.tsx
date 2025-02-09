import About from "./_sections/About";
import Clients from "./_sections/Clients";
import Contact from "./_sections/Contact";
import Experience from "./_sections/Experience";
import Footer from "./_sections/Footer";
import Hero from "./_sections/Hero";
import Projects from "./_sections/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

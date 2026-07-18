import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <Footer />
    </>
  );
}

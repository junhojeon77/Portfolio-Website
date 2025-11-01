import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <br />
      <Header />
      <section id="home" className="h-screen">
        <Hero />
      </section>
      <section id="about" className="">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </main>
  );
}

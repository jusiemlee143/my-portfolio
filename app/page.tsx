import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ScrollProgress from "./components/ScrollProgress";
import MouseGlow from "./components/MouseGlow";
import LoadingScreen from "./components/LoadingScreen";


export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        <LoadingScreen />
         <ScrollProgress />
        <MouseGlow />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
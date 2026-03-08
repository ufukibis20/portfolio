import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <About />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
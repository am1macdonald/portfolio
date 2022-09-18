import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import projectLibrary from "./projectLibrary";

function App() {
  return (
    <div data-testid="app">
      <Navbar />
      <Hero />
      <About />
      <Projects projectLibrary={projectLibrary} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

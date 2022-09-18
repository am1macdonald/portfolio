import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import TopButton from "./components/TopButton/TopButton";
import projectLibrary from "./projectLibrary";

function App() {
  return (
    <div data-testid="app">
      <Navbar />
      <TopButton />
      <Hero />
      <About />
      <Projects projectLibrary={projectLibrary} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

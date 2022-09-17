import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div data-testid="app">
      <Navbar />
      <h1>Adam's Portfolio</h1>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import {
  getFromStorage,
  getProjectCollection,
} from "./firebase/firebase_config";

function App() {
  const [summary, setSummary] = useState("");
  const [philosophy, setPhilosophy] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("Summary.md")
      .then((result) => result.text())
      .then((text) => setSummary(text));
  }, []);

  useEffect(() => {
    fetch("Philosophy.md")
      .then((result) => result.text())
      .then((text) => setPhilosophy(text));
  });

  useEffect(() => {
    const fetchProjects = async () => {
      let result = await getProjectCollection();
      setProjects(result);
    };
    fetchProjects();
  }, []);

  return (
    <div data-testid="app">
      <Navbar />
      <Hero />
      <About summary={summary} philosophy={philosophy} />
      <Projects projects={projects} getFromStorage={getFromStorage} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

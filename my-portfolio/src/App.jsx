import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import './index.css';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;

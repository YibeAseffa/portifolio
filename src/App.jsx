import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Yibeltal Aseffa</h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
            <a href="#experience" className="hover:text-blue-400">
              Experience
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 mt-8">
        <p>
          © {new Date().getFullYear()} Yibeltal Aseffa. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;

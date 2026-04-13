import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { profile, projects } from './data/portfolioData';
import './styles/App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div id="home">
          <Home profile={profile} />
        </div>
        <div id="about">
          <About profile={profile} />
        </div>
        <div id="projects">
          <Projects projects={projects} />
        </div>
        <div id="contact">
          <Contact profile={profile} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

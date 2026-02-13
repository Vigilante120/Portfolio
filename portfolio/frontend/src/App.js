import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getOverview } from './api';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/App.css';

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getOverview();
        setProfile(res.data.profile);
        setProjects(res.data.projects);
      } catch (err) {
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner" />
        <p style={{ color: '#a1a1aa' }}>Loading portfolio...</p>
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home profile={profile} />} />
        <Route path="/about" element={<About profile={profile} />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/contact" element={<Contact profile={profile} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

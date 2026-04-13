import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const Home = ({ profile }) => {
  if (!profile || !profile.name) {
    return (
      <div className="loading">
        <div className="spinner" />
        <p style={{ color: 'var(--text-muted)' }}>Loading portfolio...</p>
      </div>
    );
  }

  return (
    <>
      <section className="hero">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p className="hero-greeting" variants={fadeUp} custom={0}>
            Hey there, I'm
          </motion.p>
          <motion.h1 className="hero-name" variants={fadeUp} custom={1}>
            {profile.name}
          </motion.h1>
          <motion.p className="hero-title" variants={fadeUp} custom={2}>
            {profile.title}
          </motion.p>
          <motion.p className="hero-summary" variants={fadeUp} custom={3}>
            {profile.summary}
          </motion.p>
          <motion.div className="hero-cta" variants={fadeUp} custom={4}>
            <a href="#projects" className="btn btn-primary">
              <FiExternalLink /> View My Work
            </a>
            <a
              href={`https://instagram.com/${profile.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-instagram"
            >
              <FaInstagram /> @{profile.instagram}
            </a>
            <a href="#contact" className="btn btn-outline">
              <FiMail /> Get In Touch
            </a>
          </motion.div>
          <motion.div className="social-links" variants={fadeUp} custom={5}>
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <FiGithub />
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <FiLinkedin />
              </a>
            )}
            {profile.instagram && (
              <a
                href={`https://instagram.com/${profile.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
                title="Instagram"
              >
                <FaInstagram />
              </a>
            )}
            <a href={`mailto:${profile.email}`} className="social-link" title="Email">
              <FiMail />
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;

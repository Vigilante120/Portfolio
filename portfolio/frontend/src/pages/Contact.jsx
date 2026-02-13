import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

const Contact = ({ profile }) => {
  if (!profile || !profile.name) {
    return (
      <div className="loading">
        <div className="spinner" />
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '5rem' }}>
      <section className="contact-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="section-tag" variants={fadeUp}>Let's Connect</motion.p>
          <motion.h2 className="section-title" variants={fadeUp} custom={1}>
            Get In Touch
          </motion.h2>
          <motion.p variants={fadeUp} custom={2}>
            I'm always open to discussing new projects, creative ideas,
            or opportunities to be part of something great.
            Feel free to reach out!
          </motion.p>
          <motion.div className="contact-links" variants={fadeUp} custom={3}>
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <FiMail /> {profile.email}
            </a>
          </motion.div>
          <motion.div className="contact-links" variants={fadeUp} custom={4} style={{ marginTop: '1rem' }}>
            {profile.phone && (
              <a href={`tel:${profile.phone}`} className="btn btn-outline">
                <FiPhone /> {profile.phone}
              </a>
            )}
          </motion.div>
          <motion.div className="social-links" variants={fadeUp} custom={5} style={{ marginTop: '2.5rem' }}>
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
    </div>
  );
};

export default Contact;

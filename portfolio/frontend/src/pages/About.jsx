import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const About = ({ profile }) => {
  if (!profile || !profile.name) {
    return (
      <div className="loading">
        <div className="spinner" />
      </div>
    );
  }

  const skillCategories = [
    { label: 'Languages', skills: profile.skills_languages },
    { label: 'Frameworks', skills: profile.skills_frameworks },
    { label: 'Tools', skills: profile.skills_tools },
  ];

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* ABOUT SECTION */}
      <section className="section">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="section-tag" variants={fadeUp}>Who I Am</motion.p>
          <motion.h2 className="section-title" variants={fadeUp} custom={1}>About Me</motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp} custom={2}>
            Get to know the person behind the code
          </motion.p>
        </motion.div>

        <motion.div
          className="about-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={fadeUp} custom={0}>
            <p>{profile.summary}</p>
            <p style={{ color: 'var(--text-muted)' }}>
              I'm passionate about building products that make a difference — from spiritual companion apps
              to AI-powered enterprise solutions. I love exploring new technologies and turning ideas into
              reality with clean, scalable code.
            </p>
            <a
              href={`https://instagram.com/${profile.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-instagram"
              style={{ marginTop: '0.5rem' }}
            >
              <FaInstagram /> Follow me @{profile.instagram}
            </a>
          </motion.div>

          <motion.div className="skills-container" variants={fadeUp} custom={1}>
            {skillCategories.map((cat, idx) => (
              <div className="skill-category" key={idx}>
                <h3>{cat.label}</h3>
                <div className="skill-tags">
                  {cat.skills && cat.skills.split(',').map((skill, i) => (
                    <span className="skill-tag" key={i}>{skill.trim()}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* EXPERIENCE SECTION */}
      {profile.experiences && profile.experiences.length > 0 && (
        <section className="section">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p className="section-tag" variants={fadeUp}>Career</motion.p>
            <motion.h2 className="section-title" variants={fadeUp} custom={1}>Experience</motion.h2>
          </motion.div>

          {profile.experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="experience-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={idx}
            >
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-date">{exp.start_date} — {exp.end_date}</span>
              </div>
              <ul className="experience-bullets">
                {exp.description.split('\n').filter(Boolean).map((bullet, i) => (
                  <li key={i}>{bullet.trim()}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>
      )}

      {/* EDUCATION SECTION */}
      {profile.education && profile.education.length > 0 && (
        <section className="section">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p className="section-tag" variants={fadeUp}>Background</motion.p>
            <motion.h2 className="section-title" variants={fadeUp} custom={1}>Education</motion.h2>
          </motion.div>

          <div className="education-grid">
            {profile.education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                className="education-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={idx}
              >
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <div className="education-meta">
                  <span>{edu.year}</span>
                  {edu.grade && <span>Grade: {edu.grade}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default About;

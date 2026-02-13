import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaRocket, FaClock, FaCode, FaRobot } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
};

const projectIcons = [<FaCode />, <FaRocket />, <FaRobot />, <FaClock />];

const Projects = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="loading">
        <div className="spinner" />
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '5rem' }}>
      <section className="section">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="section-tag" variants={fadeUp}>Portfolio</motion.p>
          <motion.h2 className="section-title" variants={fadeUp} custom={1}>
            My Projects
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp} custom={2}>
            Things I've built and shipped to the real world
          </motion.p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.is_coming_soon ? 'coming-soon' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={idx}
            >
              <div className="project-icon">
                {projectIcons[idx % projectIcons.length]}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {!project.is_coming_soon && (
                <>
                  <div className="project-tech">
                    {project.tech_stack.split(',').map((tech, i) => (
                      <span className="tech-badge" key={i}>{tech.trim()}</span>
                    ))}
                  </div>

                  {project.highlights_list && project.highlights_list.length > 0 && (
                    <ul className="project-highlights">
                      {project.highlights_list.slice(0, 4).map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-links">
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live"
                      >
                        <FiExternalLink /> Live
                      </a>
                    )}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FiGithub /> Code
                      </a>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

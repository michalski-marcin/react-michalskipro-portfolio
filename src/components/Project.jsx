import '../styles/project.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated, config } from 'react-spring';
import useMeasure from 'react-use-measure';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

function Project(project) {
  const { index } = project;
  const [isActive, setIsActive] = useState(project.isFirst === true);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  const [measureRef, { height }] = useMeasure();

  const styles = useSpring({
    config: config.default,
    from: {
      height: 0,
    },
    to: {
      height: isActive ? height : 0,
    },
  });

  const inProgress = project.inProgress ? ' | In Development' : '';
  return (
    <motion.div
      key={project.id}
      className='project-card'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, delay: index * 0.2 }}>
      <div
        className='project-card-top'
        transition={{
          duration: 0.3,
          height: {
            duration: 0.3,
            ease: 'easeOut',
          },
        }}
        style={{
          color: isActive ? 'var(--cr8)' : '',
          boxShadow: isActive ? '0px 5px 10px rgba(0, 0, 0, 0.1)' : '', // Add shadow when active
        }}>
        <div className='project-title'>
          <div
            className='project-title-left'
            onClick={handleClick}>
            <MdOutlineArrowForwardIos
              className='project arrow'
              style={{
                transform: isActive ? 'rotate(0)' : '',
              }}
            />
            <h3 className='blue'>
              {project.name}
              <span className='inprogress-span'> {inProgress}</span>
            </h3>
          </div>

          <div className='project-techs'>
            {project.technology.map((title) => {
              return (
                <div
                  key={title}
                  className='tech-img'>
                  <img src={`./assets/icons/${title}`} />
                </div>
              );
            })}

            {project.commercial ? (
              <div>
                <p className='project-tech commercial'>Commercial</p>
              </div>
            ) : null}
          </div>
        </div>

        <animated.div style={{ overflow: 'hidden', ...styles }}>
          <div
            ref={measureRef}
            className='project-details'>
            <div className='project-details-top'>
              <div className='project-img'>
                <img
                  src={`../projectimg/${project.image}`}
                  alt='project'
                />
              </div>
              <div className='project-description'>{project.description}</div>
            </div>
            <div className='project-card-bottom'>
              <div className='project-link'>
                {project.github && (
                  <div className='project-github'>
                    <i class='bx bxl-github'></i>
                    <a
                      href={project.github}
                      target='_blank'>
                      Code
                    </a>
                  </div>
                )}
                {project.webpage && (
                  <div className='project-website'>
                    <i class='bx bx-link'></i>
                    <a
                      href={project.webpage}
                      target='_blank'>
                      Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </motion.div>
  );
}
export default Project;

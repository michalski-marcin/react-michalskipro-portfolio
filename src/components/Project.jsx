import "../styles/project.css";
import { projects } from "../data/projects"
import { easeIn, motion } from "framer-motion";

 function Project() {

  return (
    <div className="projects-container">
      {projects.map((project, i) => (
    <motion.div
      className='project-card'
      initial={{ opacity: 0, y: 300}}
      animate={{ opacity: 1, y:0 }}
      exit={{ opacity: 0, y: 300}}
      transition={{duration: 0.9, delay: i * 0.2, ease: "backInOut"}}>
  
      {/* <div className='project-img'>
        <img src={`../projectimg/${project.image}`} alt='project' />
      </div> */}
      <div className="project-card-top">
      
      <div className="project-title"><i class="fa-solid fa-sort-down"></i><h3 class="blue">{project.name}</h3></div>
      <div className='project-techs'>
        {project.technology.map((title) => {
          return <div key={title}><p className="project-tech">{title}</p></div>;
        })}

        {project.commercial = true ? <div><p className="project-tech commercial">Commercial</p></div> : null}
        
      </div>
      </div>
      {/* <p>{project.description}</p>

      
      if ({project.github}) {
      <div className='project-github'>
        <img src='ikona githuba' alt='git' />
        <p>
          <a href='#'>{project.github}</a>
        </p>
      </div>}
      <div className='project-website'>
        <img src='ikona web' alt='' />
        <p>
          <a href='#'>{project.webpage}</a>
        </p></div> */}
      
    </motion.div>
    ))}
    </div>
  );
}
export default Project;
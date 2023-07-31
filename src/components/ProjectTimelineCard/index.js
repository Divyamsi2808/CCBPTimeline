import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectCardItem = props => {
  const {projectObj} = props
  return (
    <div className="project-container">
      <img src={projectObj.imageUrl} alt="project" className="project-image" />
      <div className="project-header">
        <h1 className="project-heading">{projectObj.projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar className="calendar-icon" />
          <p className="project-duration-text">{projectObj.duration}</p>
        </div>
      </div>
      <p className="project-description-text">{projectObj.description}</p>
      <a href={projectObj.projectUrl} className="anchor-ele">
        Visit
      </a>
    </div>
  )
}

export default ProjectCardItem

import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseCardItem = props => {
  const {courseObj} = props
  return (
    <div className="course-container">
      <div className="course-header">
        <h1 className="course-heading">{courseObj.courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="course-duration-text">{courseObj.duration}</p>
        </div>
      </div>
      <p className="course-description-text">{courseObj.description}</p>
      <ul className="tags-list-container">
        {courseObj.tagsList.map(eachObj => (
          <li key={eachObj.id} className="tag-ele">
            <p className="tag-text">{eachObj.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseCardItem

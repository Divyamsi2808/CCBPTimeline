import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseCardItem from '../CourseTimelineCard'
import ProjectCardItem from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  renderChrononSection = () => {
    const {timelineItemsList} = this.props
    const items = timelineItemsList.map(eachObj => ({title: eachObj.title}))
    return (
      <>
        <Chrono mode="VERTICAL_ALTERNATING" items={items}>
          {timelineItemsList.map(eachObj =>
            eachObj.categoryId === 'PROJECT' ? (
              <ProjectCardItem key={eachObj.id} projectObj={eachObj} />
            ) : (
              <CourseCardItem key={eachObj.id} courseObj={eachObj} />
            ),
          )}
        </Chrono>
      </>
    )
  }

  render() {
    return (
      <div className="main-container">
        <div className="content-container">
          <h1 className="main-heading">
            MY JOURNEY OF<span className="para-ele">CCBP 4.0</span>
          </h1>
          {this.renderChrononSection()}
        </div>
      </div>
    )
  }
}

export default TimelineView

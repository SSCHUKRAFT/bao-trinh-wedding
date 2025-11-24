import React from 'react';
import './timeline.css';
import Background from '../../assets/page-backgrounds/timeline-bg.jpg';
import { ReactComponent as TimelineSvg } from '../../assets/Timeline-Content.svg'

const Timeline = () => {
  const bgStyles = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    scale: '1',
    position: 'absolute'
  };

  return (
    <div className="timeline">
      <div style={bgStyles}>
        <div className="timeline-title-txt">
          <div className="timeline-name-txt">Vu & Anh's</div>
          <div className="timeline-wedding-day">Wedding Day</div>
        </div>
        <TimelineSvg />
      </div>
    </div>
  );
}

export default Timeline;
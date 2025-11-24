import React from 'react';
import './rsvp.css';
import Background from '../../assets/page-backgrounds/rsvp-bg.jpg'
import RsvpForm from '../../components/RsvpForm';

const Rsvp = () => {
  const bgStyles = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    scale: '1',
    position: 'absolute',
  };
  
  return (
    <div className="rsvp">
      <div style={bgStyles} />
        <div className="rsvp-title">RSVP</div>
        <div className="rsvp-form-container">
          <div className="rsvp-form">
            <RsvpForm />
          </div>
          <div className="rsvp-submit-btn-container">

          </div>
        </div>
    </div>
  )
}

export default Rsvp;
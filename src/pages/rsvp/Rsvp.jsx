import React from 'react';
import './rsvp.css';
import RsvpForm from '../../components/RsvpForm';

const Rsvp = () => {
  return (
    <div className="rsvp">
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

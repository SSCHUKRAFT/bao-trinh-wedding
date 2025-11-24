/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './partymember.css'

export default function PartyMember(props) {
  return (
    <div className="party-member-container">
      <div className="party-member-img-wrapper">
        <img src={props.image} />
      </div>
      <div className="party-member-txt">
        {props.name}
        {props.role != null ? <div>{props.role}</div> : null}
      </div>
    </div>
  )
}

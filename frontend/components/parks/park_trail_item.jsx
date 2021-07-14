import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export const ParkTrailItem = ({ trail, parkName }) => {

  let className = trail.difficulty;

  return (
    <div>
      <Link className="park-trail-item" to={`/trail/${trail.id}`}>
        <img src={"https://paultrails-seeds.s3.us-west-1.amazonaws.com/session_form_img.jpg"} alt="ziontrails.jpg"/>
        <div className="park-trail-item-info">
          <h2>{trail.name}</h2>
          <h4>{parkName}</h4>
          <div className="park-trail-stars-diff">
            <p className={`${className} difficulty-buttons`}>{trail.difficulty}</p>
            <ReactStars 
              count={5} 
              value={4}
              color="lightgray"
              size={18}
              edit={false}
            /> 
          </div>
          <p className="park-trail-length">Length: {trail.length}</p>
          <p className="park-trail-summary">{trail.summary}</p>
        </div>
      </Link>
    </div>
  )
};
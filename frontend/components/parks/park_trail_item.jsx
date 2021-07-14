import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export const ParkTrailItem = ({ trail, parkName }) => (
  <div>
    <Link className="park-trail-item" to={`/trail/${trail.id}`}>
      <img src={"https://paultrails-seeds.s3.us-west-1.amazonaws.com/session_form_img.jpg"} alt="ziontrails.jpg"/>
      <div className="park-trail-item-info">
        <h2>{trail.name}</h2>
        <h4>{parkName}</h4>
        <div>
          <p>{trail.difficulty}</p>
          <ReactStars 
            count={5} 
            value={4}
            color="lightgray"
            size={20}
            edit={false}
          /> 
        </div>
        <p>{trail.length}</p>
        <p>{trail.summary}</p>
      </div>
    </Link>
  </div>
);
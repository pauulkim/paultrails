import React from "react";
import { Link } from "react-router-dom";

export const ParkTrailItem = ({ trail, parkName }) => (
  <div>
    <Link className="park-trail-item" to={`/trail/${trail.id}`}>
      <img src={"https://paultrails-seeds.s3.us-west-1.amazonaws.com/session_form_img.jpg"} alt="ziontrails.jpg"/>
      <h2>{trail.name}</h2>
      <h4>{parkName}</h4>
      <p>{trail.difficulty}</p>
      <p>{trail.length}</p>
      <p>{trail.summary}</p>
    </Link>
  </div>
);
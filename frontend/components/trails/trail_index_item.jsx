import React from "react";
import { Link } from "react-router-dom";

export const TrailIndexItem = ({ trail, parkName }) => (
  <div>
    <Link to={`/trail/${trail.id}`}>
      <h2>{trail.name}</h2>
      <h4>{parkName}</h4>
      <p>{trail.difficulty}</p>
      <p>{trail.length}</p>
      <p>{trail.summary}</p>
    </Link>
  </div>
);
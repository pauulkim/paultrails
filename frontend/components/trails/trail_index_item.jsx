import React from "react";

export const TrailIndexItem = ({ trail, parkName }) => (
  <div>
    <h2>{trail.name}</h2>
    <h4>{parkName}</h4>
    <p>{trail.difficulty}</p>
    <p>{trail.length}</p>
    <p>{trail.summary}</p>
  </div>
);
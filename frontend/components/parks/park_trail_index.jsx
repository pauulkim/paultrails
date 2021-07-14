import React from "react";
import { ParkTrailItem } from "./park_trail_item";

export const ParkTrailIndex = ({ trails, parkName }) => (
    <ul className="park-trails-list">
      {
        trails.map( (trail) => (
          <ParkTrailItem key={trail.id} trail={trail} parkName={parkName}/>
        ))
      }
    </ul>
);
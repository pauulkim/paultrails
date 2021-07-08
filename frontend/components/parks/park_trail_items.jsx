import React from "react";
import { ParkTrail } from "./park_trail";

export const ParkTrailItems = ({ trails, parkName }) => (
    <ul>
      {
        trails.map( (trail) => (
          <ParkTrail key={trail.id} trail={trail} parkName={parkName}/>
        ))
      }
    </ul>
);
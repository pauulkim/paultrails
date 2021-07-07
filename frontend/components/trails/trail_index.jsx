import React from "react";
import { TrailIndexItem } from "./trail_index_item";

export const TrailIndex = ({ trails, parkName }) => (
    <ul>
      {
        trails.map( (trail) => (
          <TrailIndexItem key={trail.id} trail={trail} parkName={parkName}/>
        ))
      }
    </ul>
);
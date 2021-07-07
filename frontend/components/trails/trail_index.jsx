import React from "react";
import { TrailIndexItem } from "./trail_index_item";

export const TrailIndex = ({ trails }) => (
    <ul>
      {
        trails.map( (trail, idx) => (
          <TrailIndexItem key={idx} trail={trail}/>
        ))
      }
    </ul>
);
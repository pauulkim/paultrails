import React from "react";
import TrailReviewItem from "./trail_review_item";

const TrailReviewIndex = ({ trailId, loggedIn, currentUser, reviews, editReview, removeReview }) => (
  <ul>
    {
      reviews.map( review => (
        <TrailReviewItem key={review.id} trailId={trailId} loggedIn={loggedIn} currentUser={currentUser} review={review} editReview={editReview} removeReview={removeReview} />
      ))
    }
  </ul>
);

export default TrailReviewIndex;
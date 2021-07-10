import React from "react";
import TrailReview from "./trail_review";

const TrailReviews = ({ trailId, loggedIn, currentUser, reviews, editReview, removeReview }) => (
  <ul>
    {
      reviews.map( review => (
        <TrailReview key={review.id} trailId={trailId} loggedIn={loggedIn} currentUser={currentUser} review={review} editReview={editReview} removeReview={removeReview} />
      ))
    }
  </ul>
);

export default TrailReviews;
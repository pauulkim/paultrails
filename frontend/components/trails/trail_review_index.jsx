import React from "react";
import TrailReviewItem from "./trail_review_item";

const TrailReviewIndex = ({ trailName, loggedIn, currentUser, reviews, editReview, removeReview, buttonText }) => (
  <ul>
    {
      reviews.map( review => (
        <TrailReviewItem key={review.id} trailName={trailName} loggedIn={loggedIn} currentUser={currentUser} review={review} editReview={editReview} removeReview={removeReview} buttonText={buttonText}/>
      ))
    }
  </ul>
);

export default TrailReviewIndex;
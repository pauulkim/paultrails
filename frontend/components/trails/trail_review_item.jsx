import React from "react";
import ReviewForm from "../reviews/review_form";

class TrailReviewItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    let { trailName, review, currentUser, editReview, loggedIn, buttonText } = this.props;
    let formState = {
      rating: review.rating,
      activity_date: review.activity_date,
      review_description: review.review_description,
      user_id: review.user_id,
      trail_id: review.trail_id,
      displayReviewForm: false
    };

    return (
      <div>
        <h3>{review.name}</h3>
        <p>Rating: {review.rating}/5</p>
        <p>{review.activity_date}</p>
        <p>{review.review_description}</p>
        <p>User Id: {review.user_id}</p>
        <p>Trail Id: {review.trail_id}</p>
        {
          (review.user_id === currentUser) ?
          (
            <div>
              <ReviewForm formState={formState} trailName={trailName} loggedIn={loggedIn} actionType={editReview} reviewId={review.id} update={true} buttonText={buttonText}/>
              <button>Delete</button>
            </div>
          ) : null
        }
      </div>
    )
  }
};

export default TrailReviewItem;
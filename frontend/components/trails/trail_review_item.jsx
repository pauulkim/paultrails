import React from "react";
import ReactStars from "react-rating-stars-component";
import ReviewForm from "../reviews/review_form";

class TrailReviewItem extends React.Component {
  constructor(props) {
    super(props);

    this.deleteReview = this.deleteReview.bind(this);
  };

  deleteReview() {
    this.props.removeReview(this.props.review.id)
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
      <div className="trail-reviews-container">
        <div className="trail-reviews-inner">
          <h3>{review.name}</h3>
          <div className="trail-review-stars-date">
            <ReactStars 
              count={5} 
              value={review.rating}
              color="lightgray"
              size={18}
              edit={false}
            /> 
            <p>{review.activity_date}</p>
          </div>
          <p className="trail-review-description">{review.review_description}</p>
          {
            (review.user_id === currentUser) ?
            (
              <div className="edit-delete-container">
                <button className="delete-button" onClick={this.deleteReview}>Delete</button>
                <ReviewForm formState={formState} trailName={trailName} loggedIn={loggedIn} actionType={editReview} reviewId={review.id} update={true} buttonText={buttonText} formName="edit"/>
              </div>
            ) : null
          }
        </div>
      </div>
    )
  }
};

export default TrailReviewItem;
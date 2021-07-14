import React from "react";
import TrailReviewIndex from "./trail_review_index";
import ReviewForm from "../reviews/review_form";

class Trail extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.requestTrail(this.props.trailId);
    this.props.requestTrailReviews(this.props.trailId);
  };
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.trailId !== this.props.trailId) {
      this.props.requestTrail(this.props.trailId);
      this.props.requestTrailReviews(this.props.trailId);
    };
  };

  render() {
    let { trailId, trail, loggedIn, currentUser, reviews, makeReview, editReview, removeReview } = this.props;
    let formState = {
      rating: "",
      activity_date: "",
      review_description: "",
      user_id: currentUser,
      trail_id: trailId,
      displayReviewForm: false
    };
    
    if (!trail) return null;

    return (
      <div className="trail-container">
        <img src="https://paultrails-seeds.s3.us-west-1.amazonaws.com/home_page.jpg" alt="trail.jpg"/>
        <div>
          <h2>{trail.name}</h2>
          <p>{trail.summary}</p>
          <p>{trail.description}</p>
          <p>{trail.difficulty}</p>
          <p>{trail.length}</p>
          <p>{trail.elevation_gain}</p>
          <p>{trail.route_type}</p>
          <p>{`${trail.lat}, ${trail.long}`}</p>
          <ReviewForm formState={formState} trailName={trail.name} actionType={makeReview} loggedIn={loggedIn} history={this.props.history} buttonText={"Write review"}/>
        </div>
        <div>
          <TrailReviewIndex trailName={trail.name} loggedIn={loggedIn} currentUser={currentUser} reviews={reviews} editReview={editReview} removeReview={removeReview} buttonText={"Edit"} />
        </div>
      </div>
    )
  };
};

export default Trail;
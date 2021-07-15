import React from "react";
import TrailReviewIndex from "./trail_review_index";
import ReviewForm from "../reviews/review_form";
import ReactStars from "react-rating-stars-component";
import Map from "../maps/map";

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

    let className;  
    if (trail) className = trail.difficulty;

    return (
      <div className="trail-container">
        <div className="trail-top-section">
          <img src="https://paultrails-seeds.s3.us-west-1.amazonaws.com/home_page.jpg" alt="trail.jpg"/>
          <div className="trail-top-header">
            <h2>{trail.name}</h2>
            <div className="park-trail-stars-diff">
              <p className={`${className} difficulty-buttons`}>{trail.difficulty}</p>
              <ReactStars 
                count={5} 
                value={5}
                color="lightgray"
                size={18}
                edit={false}
              /> 
            </div>
          </div>
        </div>
        <div className="trail-top-buttons"></div>
        <div className="trail-bottom">
          <div className="trail-bottom-info">
            <p className="trail-summary">{trail.summary}</p>
            <div className="trail-other-info">
              <div>
                <p className="trail-other-title">Length</p>
                <p className="trail-other-item">{trail.length} mi</p>
              </div>
              <div>
                <p className="trail-other-title">Elevation gain</p>
                <p className="trail-other-item">{trail.elevation_gain}</p>
              </div>
              <div>
                <p className="trail-other-title">Route type</p>
                <p className="trail-other-item">{trail.route_type}</p>
              </div>
            </div>
            <div className="trail-tabs">
              <p>Description</p>
            </div>
            <p className="trail-description">{trail.description}</p>
            <p>{`${trail.lat}, ${trail.long}`}</p>
            <ReviewForm formState={formState} trailName={trail.name} actionType={makeReview} loggedIn={loggedIn} history={this.props.history} buttonText={"Write review"}/>
            <TrailReviewIndex trailName={trail.name} loggedIn={loggedIn} currentUser={currentUser} reviews={reviews} editReview={editReview} removeReview={removeReview} buttonText={"Edit"} />
          </div>
          <Map lat={trail.lat} long={trail.long} type="trail-map"/>
        </div>
      </div>
    )
  };
};

export default Trail;
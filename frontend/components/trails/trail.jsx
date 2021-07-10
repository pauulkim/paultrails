import React from "react";
import TrailReviews from "./trail_reviews";

class Trail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayReviewForm: false
    };

    this.onLoggedInClick = this.onLoggedInClick.bind(this);
    this.onLoggedOffClick = this.onLoggedOffClick.bind(this);
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

  onLoggedInClick() {
    this.setState({
      displayReviewForm: !this.state.displayReviewForm
    })
  };
  
  onLoggedOffClick() {
    this.props.history.push("/login")
  };

  render() {
    let { trailId, trail, loggedIn, currentUser, reviews, editReview, removeReview } = this.props;
    
    if (!trail) return null;

    return (
      <div>
        <section>
          <h2>{trail.name}</h2>
          <p>{trail.summary}</p>
          <p>{trail.description}</p>
          <p>{trail.difficulty}</p>
          <p>{trail.length}</p>
          <p>{trail.elevation_gain}</p>
          <p>{trail.route_type}</p>
          <p>{`${trail.lat}, ${trail.long}`}</p>
          <button onClick={loggedIn ? this.onLoggedInClick : this.onLoggedOffClick}>Write review</button>
          {this.state.displayReviewForm ? <p>hello</p> : null}
        </section>
        <section>
          <TrailReviews trailId={trailId} loggedIn={loggedIn} currentUser={currentUser} reviews={reviews} editReview={editReview} removeReview={removeReview} />
        </section>
      </div>
    )
  };
};

export default Trail;
import React from "react";
import ReactStars from "react-rating-stars-component";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.formState;

    this.onLoggedInClick = this.onLoggedInClick.bind(this);
    this.onLoggedOffClick = this.onLoggedOffClick.bind(this);

    this.stars_update = this.stars_update.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  onLoggedInClick() {
    this.setState({
      displayReviewForm: !this.state.displayReviewForm
    })
  };
  
  onLoggedOffClick() {
    this.props.history.push("/login")
  };

  update(input) {
    return e => {
      this.setState({
        [input]: e.target.value
      })
    };
  };

  stars_update(rating) {
    this.setState({
      rating: rating
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      displayReviewForm: !this.state.displayReviewForm
    });
    if (this.props.update) {
      this.props.actionType(this.state, this.props.reviewId);
    } else {
      this.props.actionType(this.state);
    };
  }

  render() {
    let { trailName, loggedIn } = this.props;
    // console.log(this.state);

    return (
      <div>
        <div className="review-button-container">
          <button className="review-button" onClick={loggedIn ? this.onLoggedInClick : this.onLoggedOffClick}>{this.props.buttonText}</button>
        </div>
        {
          (!this.state.displayReviewForm) ? null :
          (
            <div className="review-form-container">
              <form className="review-form" onSubmit={this.handleSubmit}>
                <div className="review-form-x" onClick={this.onLoggedInClick}>x</div>
                <h2>{trailName}</h2>
                <ReactStars 
                  count={5}
                  value={this.state.rating}
                  color="lightgray"
                  size={40}
                  onChange={this.stars_update}
                /> 
                {/* <label>
                  <input 
                    type="text"
                    placeholder="Rating"
                    value={this.state.rating}
                    onChange={this.update("rating")}
                    required
                  />
                </label> */}
                <div className="trail-activity-container">
                  <label>Activity Date  
                    <input 
                      className="trail-activity-input"
                      type="date"
                      value={this.state.activity_date}
                      onChange={this.update("activity_date")}
                      required
                    />
                  </label>
                </div>
                <div className="trail-review-textarea-container">
                  <textarea 
                    className="trail-review-textarea"
                    placeholder="Give back to the community. Share your thoughts about the trail!"
                    value={this.state.review_description}
                    onChange={this.update("review_description")}
                    required
                  />
                </div>
                <div className="trail-review-post-container">
                  <button>Post</button>
                </div>

              </form>
            </div>
          )
        }
      </div>
    )
  }
};

export default ReviewForm;
import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.formState;

    this.onLoggedInClick = this.onLoggedInClick.bind(this);
    this.onLoggedOffClick = this.onLoggedOffClick.bind(this);

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

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      displayReviewForm: !this.state.displayReviewForm
    });
    if (this.props.update) {
      debugger
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
        <button onClick={loggedIn ? this.onLoggedInClick : this.onLoggedOffClick}>{this.props.buttonText}</button>
        {
          (!this.state.displayReviewForm) ? null :
          (
            <form onSubmit={this.handleSubmit}>
              <h2>{trailName}</h2>
              <label>
                <input 
                  type="text"
                  placeholder="Rating"
                  value={this.state.rating}
                  onChange={this.update("rating")}
                  required
                />
              </label>
              <label>
                <input 
                  type="date"
                  value={this.state.activity_date}
                  onChange={this.update("activity_date")}
                  required
                />
              </label>
              <textarea 
                placeholder="Give back to the community. Share your thoughts about the trail!"
                value={this.state.review_description}
                onChange={this.update("review_description")}
                required
              />
              <button>Post</button>
            </form>
          )
        }
      </div>
    )
  }
};

export default ReviewForm;
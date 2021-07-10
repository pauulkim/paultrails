import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formState;

    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.actionType(this.state);
  }

  render() {
    let { trailName } = this.props;
    // console.log(this.state)

    return (
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
};

export default ReviewForm;
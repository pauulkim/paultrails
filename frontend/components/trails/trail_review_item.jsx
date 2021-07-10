import React from "react";

class TrailReviewItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    let { review } = this.props;

    return (
      <div>
        <h3>{review.name}</h3>
        <p>Rating: {review.rating}/5</p>
        <p>{review.activity_date}</p>
        <p>{review.review_description}</p>
        <p>User Id: {review.user_id}</p>
        <p>Trail Id: {review.trail_id}</p>
      </div>
    )
  }
};

export default TrailReviewItem;
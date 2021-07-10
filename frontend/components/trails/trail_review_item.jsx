import React from "react";

class TrailReviewItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    let { review, currentUser } = this.props;

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
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ) : null
        }
      </div>
    )
  }
};

export default TrailReviewItem;
import React from "react";

class TrailReview extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    let { review } = this.props;

    return (
      <div>
        <p>{review.name}</p>
        <p>{review.rating}</p>
        <p>{review.activity_date}</p>
        <p>{review.review_description}</p>
      </div>
    )
  }
};

export default TrailReview;
import React from "react";

class Trail extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.requestTrail(this.props.trailId);
  };
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.trailId !== this.props.trailId) {
      this.props.requestTrail(this.props.trailId);
    };
  };

  render() {
    let { loggedIn, trail } = this.props;
    
    if (!trail) return null;

    return (
      <div>
        <h2>{trail.name}</h2>
        <p>{trail.summary}</p>
        <p>{trail.description}</p>
        <p>{trail.difficulty}</p>
        <p>{trail.length}</p>
        <p>{trail.elevation_gain}</p>
        <p>{trail.route_type}</p>
        <p>{`${trail.lat}, ${trail.long}`}</p>
      </div>
    )
  };
};


export default Trail;
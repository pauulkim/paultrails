import React from "react";
import { TrailIndex } from "../trails/trail_index";

class Park extends React.Component {
  constructor(props) {
    super(props)
  };

  // makes request to backend and updates state, triggering a rerender with the park/trail info
  componentDidMount() {
    this.props.requestPark(this.props.parkId)
    this.props.requestParkTrails(this.props.parkId)
  };

  render() {
    const { park } = this.props;
    const { trails } = this.props;

    if (!park) return null;
    if (!trails) return null;
    
    return (
      <div>
        <section>
          <h1>{park.name}</h1>
          <p>{park.description}</p>
          <p>{`(${park.lat}, ${park.long})`}</p>
          <p>{park.acreage}</p>
          <p>{park.contact}</p>
        </section>
        <section>
            <TrailIndex trails={trails}/>
        </section>
      </div>
    )
  };
};

export default Park;
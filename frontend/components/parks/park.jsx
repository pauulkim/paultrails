import React from "react";
import { ParkTrailItems } from "./park_trail_items";

class Park extends React.Component {
  constructor(props) {
    super(props)
  };

  // makes request to backend and updates state, triggering a rerender with the park/trail info
  componentDidMount() {
    debugger
    this.props.requestPark(this.props.parkId) 
    this.props.requestParkTrails(this.props.parkId)
  };
  
  componentDidUpdate(prevProps, prevState) {
    debugger
    if (prevProps.parkId !== this.props.parkId) {
      this.props.requestPark(this.props.parkId) 
      this.props.requestParkTrails(this.props.parkId)
    } 
  };

  render() {
    debugger
    const { park, trails } = this.props;

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
            <ParkTrailItems trails={trails} parkName={park.name}/>
        </section>
      </div>
    )
  };
};

export default Park;
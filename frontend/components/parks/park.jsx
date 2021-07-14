import React from "react";
import Map from "../maps/map";
import { ParkTrailIndex } from "./park_trail_index";

class Park extends React.Component {
  constructor(props) {
    super(props)
  };

  // makes request to backend and updates state, triggering a rerender with the park/trail info
  componentDidMount() {
    this.props.requestPark(this.props.parkId) 
    this.props.requestParkTrails(this.props.parkId)
  };
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.parkId !== this.props.parkId) {
      this.props.requestPark(this.props.parkId) 
      this.props.requestParkTrails(this.props.parkId)
    } 
  };

  render() {
    const { park, trails } = this.props;

    if (!park) return null;
    if (!trails) return null;
    
    return (
      <div>
        <section>
          <h1>{park.name}</h1>
          <p>{park.description}</p>
          <Map lat={park.lat} long={park.long} type="park-map"/>
          {/* <p>{`(${park.lat}, ${park.long})`}</p> */}
          <p>{park.acreage}</p>
          <p>{park.contact}</p>
        </section>
        <section>
            <ParkTrailIndex trails={trails} parkName={park.name}/>
        </section>
      </div>
    )
  };
};

export default Park;
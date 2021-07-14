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
      <div className="park-container">
        <img src="https://paultrails-seeds.s3.us-west-1.amazonaws.com/session_form_img.jpg"/>
        <div className="park-info">
          <h1 className="park-title">{park.name}</h1>
          <p className="park-description">{park.description}</p>
          <Map lat={park.lat} long={park.long} type="park-map"/>
        </div>
        <div>
          <div className="park-minor-details">
            <p>{park.acreage}</p>
            <p>{park.contact}</p>
          </div>
        </div>
        <div>
            <ParkTrailIndex trails={trails} parkName={park.name}/>
        </div>
      </div>
    )
  };
};

export default Park;
import React from "react";
import Map from "../maps/map";
import { ParkTrailIndex } from "./park_trail_index";
import ReactStars from "react-rating-stars-component";

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
        <img src={park.parkPhoto} alt="park.jpg"/>
        <div className="park-info">
          <h1 className="park-title">{park.name}</h1>
          <ReactStars 
            count={5} 
            value={4}
            color="lightgray"
            size={18}
            edit={false}
          /> 
          <p className="park-description">{park.description}</p>
          <Map lat={park.lat} long={park.long} type="park-map"/>
        </div>
        <div className="park-minor-info">
          <h1>Park information</h1>
          <div className="park-minor-details">
            <div className="acreage">
              <h2>Acreage:</h2>
              <p>{park.acreage}</p>
            </div>
            <div className="contact">
              <h2>Contact</h2>
              <p>{park.contact}</p>
            </div>
          </div>
        </div>
        <div className="park-trails-container">
          <h2>Trails</h2>
          <ParkTrailIndex trails={trails} parkName={park.name}/>
        </div>
      </div>
    )
  };
};

export default Park;
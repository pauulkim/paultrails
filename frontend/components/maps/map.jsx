import React from "react";

class Map extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    const mapOptions = {
      center: { lat: this.props.lat, lng: this.props.long },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  };

  render() {
    return (
      <div className={this.props.type} ref={ map => this.mapNode = map }></div>
    )
  }
};

export default Map;
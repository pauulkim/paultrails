import React from "react";

class TestMap extends React.Component {
  //...

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.33104400372421, lng: -121.8106549654417 }, // this is SF
      zoom: 13
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    console.log(this.mapNode)
  }

  render() {
    return (
      <>
      <div className="test-map" ref={ map => this.mapNode = map }></div>
      {console.log(this.mapNode)}
      </>
    )
  }
}

export default TestMap;
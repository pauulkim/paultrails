import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search_bar/search_bar";

const Home = (props) => {

  useEffect(() => {
    props.requestSearchResults()
  }, [])

  return (
    <div>
      <div className="home-page-wrapper">
        <img className="home-page-image" src={"https://paultrails-seeds.s3.us-west-1.amazonaws.com/home_page.jpg"} alt="homepage.jpg"/>
        <div className="home-page-header">
          <h1>Find your next adventure</h1>
        </div>
      </div>
      <div>
        <SearchBar search={props.search} />
      </div>
      {/* <div className="temporary-home-links-container">
        <Link to="/parks/1">Zion National Park</Link>
        <Link to="/parks/2">Hallasan National Park, South Korea</Link>
      </div> */}
    </div>
  )
};

export default Home;
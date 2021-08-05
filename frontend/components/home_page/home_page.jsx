import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  console.log(props)
  return (
    <div>
      <div className="home-page-wrapper">
        <img className="home-page-image" src={"https://paultrails-seeds.s3.us-west-1.amazonaws.com/home_page.jpg"} alt="homepage.jpg"/>
        <h1 className="home-page-greeting">Find your next adventure</h1>
      </div>
      <div className="temporary-home-links-container">
        <Link to="/parks/1">Zion National Park</Link>
        <Link to="/parks/2">Hallasan National Park, South Korea</Link>
      </div>
    </div>
  )
};

export default Home;
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
        <h1 className="home-page-header">Find your next adventure</h1>
      </div>
      <div>
        <SearchBar search={props.search} />
      </div>
    </div>
  )
};

export default Home;
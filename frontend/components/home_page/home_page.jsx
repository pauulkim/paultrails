import React, { useEffect } from "react";
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
      <SearchBar search={props.search} />
      <footer className="footer-container">
        <div>
          <i className="fas fa-mountain logo"></i>
          <p>PaulTrails</p>
        </div>
      </footer>
    </div>
  )
};

export default Home;
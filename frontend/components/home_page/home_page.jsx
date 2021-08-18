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
        <div className="left-footer-container">
          <i className="fas fa-mountain bottom-logo"></i>
          <p className="bottom-header">PaulTrails</p>
        </div>
        <div className="right-footer-container">
          <a href="https://github.com/pauulkim"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/pauulkim/"><i className="fab fa-linkedin"></i></a>
          <a href="https://angel.co/u/paulkim36"><i className="fab fa-angellist"></i></a>
        </div>
      </footer>
    </div>
  )
};

export default Home;
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="home-page-wrapper">
        <img className="home-page-image" src={"https://paultrails-seeds.s3.us-west-1.amazonaws.com/home_page.jpg"} alt="homepage.jpg"/>
        <h1 className="home-page-greeting">Find your next adventure</h1>
      </div>
    </div>
  )
};

export default Home;
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="home-page-wrapper">
        <img className="home-page-image" src={window.homePage}/>
        <h1 className="home-page-greeting">Find your next adventure</h1>
      </div>
    </div>
  )
};

export default Home;
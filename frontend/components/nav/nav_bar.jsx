import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {

  return (
    <div className="nav-bar">
      <div className="invisible"></div>
      {/* main title with link that navigates to home page */}
      <div className="main-logo">
        <Link to="/">PaulTrails</Link>
      </div>

      {/* displays different elements depending on if a user is logged in or not */}
      {
        currentUser ? (
                        <div className="session-buttons">
                          <p>{currentUser.first_name}</p>
                          <Link to="/">
                            <button onClick={logout}>Log out</button>
                          </Link>
                        </div>
                      ) 
                    :   
                      (
                        <div className="session-buttons">
                          <Link to="/signup" className="sign-up">Sign up</Link>
                          <Link to="/login" className="log-in">Log in</Link>
                        </div>
                      )
      }
    </div>
  )

}

export default NavBar;
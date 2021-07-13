import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {

  return (
    <nav className="nav-bar">
      <div className="invisible"></div>
      {/* main title with link that navigates to home page */}
      <div className="main-logo">
        <Link to="/">
          <i className="fas fa-mountain logo"></i>
          PaulTrails
        </Link>
      </div>

      {/* displays different elements depending on if a user is logged in or not */}
      {
        currentUser ? (
                        <>
                          <div className="user-dropdown">
                            <div className="user-drop">
                              {currentUser.first_name}
                            <div className="user-dropdown-content" >
                              <Link to="/" onClick={logout}>Log out</Link>
                            </div>
                            </div>
                        </div>
                        </>
                      ) 
                    :   
                      (
                        <div className="session-buttons">
                          <Link className="sign-up" to="/signup">Sign up</Link>
                          <Link className="log-in" to="/login">Log in</Link>
                        </div>
                      )
      }
    </nav>
  )

}

export default NavBar;
//old code
{/* <div className="user-dropdown">
                          <div className="user-drop">
                            {currentUser.first_name}
                          <div className="user-dropdown-content" >
                            <Link to="/" onClick={logout}>Log out</Link>
                          </div>
                          </div>
                        </div> */}
import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout }) => {

  return (
    <div>
      {/* main title with link that navigates to home page */}
      <Link to="/">
        <h2>PaulTrails</h2>
      </Link>
      
      {/* displays different elements depending on if a user is logged in or not */}
      {
        currentUser ? (
                        <div>
                          <p>{currentUser.first_name}</p>
                          <button onClick={logout}>Log out</button>
                        </div>
                      ) 
                    :   
                      (
                        <div>
                          <Link to="/signup">Sign up</Link>
                          <Link to="/login">Log in</Link>
                        </div>
                      )
      }
    </div>
  )

}

export default NavBar;
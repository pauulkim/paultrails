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
                          <p>{currentUser.firstName}</p>
                          <button onClick={logout}>Logout</button>
                        </div>
                      ) 
                    :   
                      (
                        <div>
                          <Link to="/signup">SignUp</Link>
                          <Link to="/login">Login</Link>
                        </div>
                      )
      }
    </div>
  )

}

export default NavBar;
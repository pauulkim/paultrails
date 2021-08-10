import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ search }) => {  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const isFirstRun = useRef(true); // sets variable to true and lasts full lifecycle
  
  const changeSearchTerm = e => {
    setSearchTerm(e.target.value);
  };

  useEffect( () => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const results = search.filter( item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);

  }, [searchTerm])

  return (
    <div>
      <input 
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={changeSearchTerm}
      />
      { 
        searchResults.map( res => 
          <Link to={"/parks/1"}>{res.name}</Link>
        )
      }
      {/* <ul>
        { 
          searchResults.map( res => 
            <li>{res.name}</li>
          )
        }
      </ul> */}
    </div>
  )
};

export default SearchBar;
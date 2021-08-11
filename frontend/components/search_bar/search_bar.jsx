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
    <div className="search-bar-container">
      <input 
        type="text"
        placeholder="Search by park or trail name"
        value={searchTerm}
        onChange={changeSearchTerm}
      />
      { 
        searchTerm === "" 
          ? 
            null 
          :
            searchResults.map( (res, idx) => 
              <li key={idx}>
                <Link to={`/${res.type}/${res.id}`}>{res.name}</Link>
              </li>
            )
      }
    </div>
  )
};

export default SearchBar;
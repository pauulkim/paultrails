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
    <>
      <div className="search-bar-container">
        <div className="inner-search1-container">
          <i className="fas fa-search"></i>
          <input 
            type="text"
            placeholder="Search by park or trail name"
            value={searchTerm}
            onChange={changeSearchTerm}
            className="search-input"
          />
        </div>
      </div>
        { 
          searchTerm === "" 
            ? 
              null 
            :
              <div className="search-results-container">
                <div className="search-results-inner-container">
                  {
                    searchResults.map( (res, idx) => 
                      <Link className="search-result" to={`/${res.type}/${res.id}`} key={idx}>
                        {res.type === "parks" ? <i className="fas fa-tree fa-lg"></i> : <i className="fas fa-map-signs fa-lg"></i>}
                        <h1>{res.name}</h1>
                      </Link>
                    )
                  }
                </div>
              </div>
        }
    </>
  )
};

export default SearchBar;
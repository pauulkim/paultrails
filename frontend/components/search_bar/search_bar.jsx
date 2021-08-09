import React, { useState, useEffect } from "react";

const SearchBar = ({ search }) => {
  console.log(search);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  console.log(searchTerm);

  const changeSearchTerm = e => {
    setSearchTerm(e.target.value);
  };

  useEffect( () => {
    // need to fix this logic
    if (search.isArray) {
      const results = search.filter( item => 
        item.name.toLowerCase().includes(searchTerm)
      );
  
      setSearchResults(results);
    }

  }, [searchTerm])

  return (
    <div>
      <input 
        type="text"
        value={searchTerm}
        onChange={changeSearchTerm}
      />
      <ul>
        { 
          searchResults.map( res => 
            <li>{res.name}</li>
          )
        }
      </ul>
    </div>
  )
};

export default SearchBar;
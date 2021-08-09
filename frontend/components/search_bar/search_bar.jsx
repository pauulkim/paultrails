import React, { useState, useEffect } from "react";

const SearchBar = ({ search }) => {
  // console.log(search);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  console.log(searchTerm);
  
  const changeSearchTerm = e => {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <input 
        type="text"
        value={searchTerm}
        onChange={changeSearchTerm}
      />
    </div>
  )
};

export default SearchBar;
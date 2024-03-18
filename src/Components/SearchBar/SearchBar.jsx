import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="search_input"
        placeholder="Search characters"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;

import React from "react";
import "./SearchButton.css";

const SearchButton = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="button">
        Search
      </button>
    </div>
  );
};

export default SearchButton;

import React, { useState } from "react";
import Logo from "../../Assets/Logo.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";

//Components
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchButton from "../../Components/SearchButton/SearchButton";

//Error
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      toast.error("Enter the name of a character");
      return;
    }
    navigate(`/results/${encodeURIComponent(searchTerm)}/1`);
  };

  return (
    <div className="home">
      <img src={Logo} alt="Logo_RickandMorty" className="logo" />

      <form className="container">
        <div className="search_bar">
          <SearchBar onSearch={setSearchTerm} />
        </div>

        <div className="search_button">
          <SearchButton onClick={handleSearch} />
        </div>
      </form>
    </div>
  );
};

export default Home;

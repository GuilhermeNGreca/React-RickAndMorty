import React, { useCallback, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../Assets/Logo.png";
import "./Results.css";

//Components
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchButton from "../../Components/SearchButton/SearchButton";
import Cards from "../../Components/Cards/Cards";
import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import Pagination from "../../Components/Pagination/Pagination";

//Error
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Results = () => {
  const { name, page } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [saveTerm, setSaveTerm] = useState(name);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
  const navigate = useNavigate();

  const handleResults = useCallback(
    async (term) => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:80/search?name=${term}&status=${statusFilter}&page=${page}`
        );
        if (response.data.characters.length === 0) {
          setError("Error");
          navigate("/error");
        } else {
          setSearchResults(response.data.characters);
          setTotalPages(response.data.total_pages);
          setSaveTerm(term);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    },
    [page, statusFilter, navigate]
  );

  const handleSubmit = useCallback(() => {
    if (searchTerm === "") {
      toast.error("Enter the name of a character");
      return;
    }
    navigate(`/results/${encodeURIComponent(searchTerm)}/1`);
    setStatusFilter("");
  }, [searchTerm, navigate]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      navigate(`/results/${encodeURIComponent(saveTerm)}/${newPage}`);
    }
  };

  const handleStatusFilterChange = (e) => {
    const selectedValue = e.target.value;
    setStatusFilter(selectedValue);
    navigate(`/results/${encodeURIComponent(saveTerm)}/1`);
  };

  useEffect(() => {
    handleResults(name);
  }, [handleResults, name, statusFilter]);

  return (
    <div className="results">
      <Link to={"/"}>
        <img src={Logo} alt="Logo_RickandMorty" className="logo" />
      </Link>
      <form
        className="container"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="search_bar">
          <SearchBar onSearch={setSearchTerm} />
        </div>
        <div className="search_button">
          <SearchButton type="submit" />
        </div>
      </form>

      {loading ? (
        <div className="loading">
          <LoadingPage />
        </div>
      ) : (
        <div className="second_container">
          {error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div className="filter">
              <div className="status_filter">
                <label>Status Filter:</label>
                <select
                  value={statusFilter}
                  onChange={handleStatusFilterChange}
                >
                  <option value="">All</option>
                  <option value="alive">Alive</option>
                  <option value="dead">Dead</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>

              <div className="card_container">
                {searchResults.map((result) => (
                  <Cards key={result.id} result={result}></Cards>
                ))}
              </div>

              <div className="pagination_container">
                <Pagination
                  page={Number(page)}
                  totalPages={totalPages}
                  handlePageChange={handlePageChange}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Results;

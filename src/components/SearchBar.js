import { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(props) {
  const [searchInput, setSearchInput] = useState({ searchTerm: "" });

  const handleChange = (event) => {
    setSearchInput({ ...searchInput,  searchTerm: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.getWeather(searchInput.searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
      setSearchInput(searchInput);
    }
  };

  return (
    <div className="search-bar">
      <div className="search-btn-wrap">
        <form onSubmit={handleSubmit}>
          <button type="submit" className="search-btn">
            <SearchIcon />
          </button>
        </form>
      </div>
      <div className="search-inputs">
        <input
          type="text"
          name="searchTerm"
          placeholder="Enter a location"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
}

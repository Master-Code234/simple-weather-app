import { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [input, setInput] = useState("");
  

    const handleSubmit = (event) => {
      event.preventDefault();
     
    };

    console.log(input)
  

  return (
    <div className="search-bar">
      <div className="search-btn-wrap">
        <form onSubmit={handleSubmit}>
          <button className="search-btn">
            <SearchIcon />
          </button>
        </form>
      </div>
      <div className="search-inputs">
        <input
          type="text"
          placeholder="Enter a city"
          onChange={(event) => event.target.value}
        />
      </div>
    </div>
  );
}



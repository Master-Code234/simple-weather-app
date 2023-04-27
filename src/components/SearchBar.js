import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  // Todo get user input from searchbar and pass it to city parameter

  return (
    <div className="search-bar">
      <div className="search-inputs">
        <input type="text"></input>
        <div className="search-icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import TwitterIcon from "@mui/icons-material/Twitter";
import { useRouter } from "next/router";

const SearchBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <form>
      <TextField
        id="search-bar"
        className="text"
        label="Enter a tweet query"
        variant="outlined"
        placeholder="Search..."
        onChange={(e) => {
          e.preventDefault();
          setSearchQuery(e.target.value);
        }}
        size="medium"
        sx={{ width: "70%", bgcolor: "#1d267d" }}
      />

      <IconButton
        type="submit"
        aria-label="search"
        onClick={(e) => {
          e.preventDefault();
          console.log(searchQuery);
          router.push({ pathname: "/search", query: { query: searchQuery } });
        }}
        size="large"
      >
        <SearchIcon style={{ fill: "white" }} />
        <TwitterIcon color="primary" />
      </IconButton>
    </form>
  );
};

export default SearchBar;

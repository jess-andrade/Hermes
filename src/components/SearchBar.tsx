import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = () => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      label="Enter a tweet query"
      variant="outlined"
      placeholder="Search..."
      size="medium"
      sx={{ width: "70%" }}
    />
    <IconButton type="submit" aria-label="search" size="large">
      <SearchIcon style={{ fill: "#F00" }} />
    </IconButton>
  </form>
);

export default SearchBar;

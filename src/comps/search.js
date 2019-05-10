import React from "react";

function Search() {
  return (
    <div className="search">
      <input type="search" name="search" placeholder="Search for Id or title" />
      <input type="submit" value="Search" />
    </div>
  );
}

export default Search;

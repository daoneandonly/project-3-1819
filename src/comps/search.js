import React from "react";

function Search() {
  return (
    <div className="search">
      <label for="search">Search</label>
      <input type="text" name="search" placeholder="Search for Id, subtype" />
      <input type="submit" value="Send" />
    </div>
  );
}

export default Search;

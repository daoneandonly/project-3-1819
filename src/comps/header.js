import React from "react";
import Search from "./search";

function Header() {
  return (
    <div className="header">
      <div className="hamburger">
        <a href="http://cmd.jiskefet.io/?orderBy=creationTime&orderDirection=DESC&pageSize=16&pageNumber=1">
          <div className="burger-piece" />
          <div className="burger-piece" />
          <div className="burger-piece" />
        </a>
      </div>
      <img src="img/alice_logo.png" alt="Jiskefet logo" />
      <p>Jiskefet</p>
      <Search />
    </div>
  );
}

export default Header;

import React from "react";
import Leftspace from "./left-space";
import Rightspace from "./right-space";

function Main() {
  return (
    <div className="main">
      <div className="title">
        <h1>Dashboard</h1>
        <h2>Firstname Lastname</h2>
        <div className="userroles" />
      </div>
      <div className="dashboard">
        <Leftspace />
        <Rightspace />
      </div>
    </div>
  );
}

export default Main;

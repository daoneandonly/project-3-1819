import React from "react";
import Leftspace from "./left-space";
import Rightspace from "./right-space";

function Main(data) {
  return (
    <div className="main">
      <div className="title">
        <h1>Dashboard</h1>
        <h2>
          {data.user.firstName} {data.user.lastName}
        </h2>
        <div className="userroles">
          <p className="team">{data.user.team}</p>
          <p className="role">{data.user.role}</p>
        </div>
      </div>
      <div className="dashboard">
        <Leftspace data={data.data} />
        <Rightspace />
      </div>
    </div>
  );
}

export default Main;

import React from "react";
import Header from "./comps/header";
import Main from "./comps/main";
const axios = require("axios");
const header = {
  headers: {
    authorization:
      "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjRlNWQwZWJmLWE2ZjUtNDgzYi1iNjVlLWEyZDdjZDMzYWQ2OSIsImlzX3N1YnN5c3RlbSI6InRydWUiLCJwZXJtaXNzaW9uX2lkIjoiOSIsImlhdCI6MTU1NzQ3NzgwMSwiZXhwIjoxNTg5MDEzODAxfQ.tuz5MezdzvscD1IjPORcWgaPfaHZa5tE5wONumptUOI"
  }
};
const newData = [];
const fakedata = [
  {
    logid: 144,
    title: "faucibus orci luctus",
    subtype: "comment",
    origin: "human",
    creationTime: "22:24:20 30/07/2019",
    author: 12
  },
  {
    logid: 662,
    title: "faucibus orci luctus",
    subtype: "comment",
    origin: "human",
    creationTime: "22:24:20 30/07/2019",
    author: 6
  },
  {
    logid: 976,
    title: "faucibus orci luctus",
    subtype: "run",
    origin: "process",
    creationTime: "22:24:20 30/07/2019",
    author: 1
  },
  {
    logid: 976,
    title: "faucibus orci luctus",
    subtype: "run",
    origin: "process",
    creationTime: "22:24:20 30/07/2019",
    author: 1
  },
  {
    logid: 976,
    title: "faucibus orci luctus",
    subtype: "run",
    origin: "process",
    creationTime: "22:24:20 30/07/2019",
    author: 1
  },
  {
    logid: 976,
    title: "faucibus orci luctus",
    subtype: "run",
    origin: "process",
    creationTime: "22:24:20 30/07/2019",
    author: 1
  }
];

axios
  .get(
    "http://cmd.jiskefet.io/api/logs?orderBy=logId&orderDirection=DESC",
    header
  )
  .then(response => {
    response.data.data.items.forEach(item => {
      let newItem = {
        logid: item.logId,
        title: item.title,
        subtype: item.subtype,
        origin: item.origin,
        creationTime: item.creationTime,
        author: item.user.userId
      };
      newData.push(newItem);
    });
  })
  .catch(err => {
    console.log(err);
  });

function App() {
  const user = {
    firstName: "Steven",
    lastName: "Whitton",
    team: "Team 1",
    role: "Leader"
  };
  return (
    <div className="App">
      <Header />
      <Main data={fakedata} user={user} />
    </div>
  );
}

export default App;

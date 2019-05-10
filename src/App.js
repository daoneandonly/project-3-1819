import React from "react";
import Header from "./comps/header";
import Main from "./comps/main";

function App() {
  const user = {
    firstName: "Steven",
    lastName: "Whitton",
    team: "Team 1",
    role: "Leader"
  };
  const data = [
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
  return (
    <div className="App">
      <Header />
      <Main data={data} user={user} />
    </div>
  );
}

export default App;

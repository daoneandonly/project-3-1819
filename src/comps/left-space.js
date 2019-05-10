import React from "react";
import Logitem from "./logitem";

function Leftspace(data) {
  data = data.data;
  const allLogs = data.map(item => {
    return <Logitem logdata={item} key={item.logid} />;
  });

  return <div className="leftspace">{allLogs}</div>;
}

export default Leftspace;

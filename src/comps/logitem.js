import React from "react";

function Logitem(data) {
  return (
    <a
      href={"http://cmd.jiskefet.io/logs/" + data.logdata.logid}
      className="logitem"
    >
      <div className="item-wrapper">
        <h3>{data.logdata.title}</h3>
        <p>
          <span>id</span> <span>{data.logdata.logid}</span>
        </p>
        <p>
          <span>Subtype</span> <span>{data.logdata.subtype}</span>
        </p>
        <p>
          <span>Source</span> <span>{data.logdata.origin}</span>
        </p>
        <p>
          <span>Author</span> <span>{data.logdata.author}</span>
        </p>
      </div>
      <i>></i>
    </a>
  );
}

export default Logitem;

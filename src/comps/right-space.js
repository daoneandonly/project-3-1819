import React from "react";
import Shortcut from "./shortcut";

function Rightspace() {
  return (
    <div className="rightspace">
      <Shortcut
        color="positive"
        text="Create new Log"
        link="http://cmd.jiskefet.io/logs/create"
      />
      <Shortcut
        color="positive"
        text="View All Logs"
        link="http://cmd.jiskefet.io/logs?orderBy=creationTime&orderDirection=DESC&pageSize=16&pageNumber=1"
      />
      <Shortcut
        color="important"
        text="View All Runs"
        link="http://cmd.jiskefet.io/runs?pageSize=16&pageNumber=1"
      />
      <Shortcut
        color="neutral"
        text="Filterset 1:Date creation 30/07/2019"
        link="http://cmd.jiskefet.io/logs?orderBy=creationTime&orderDirection=DESC&pageSize=16&pageNumber=1"
      />
      <Shortcut
        color="neutral"
        text="Filterset 2:All logs by Author 12"
        link="http://cmd.jiskefet.io/logs?orderBy=creationTime&orderDirection=DESC&pageSize=16&pageNumber=1"
      />
      <Shortcut
        color="neutral"
        text="Filterset 3:All logs by Team 1"
        link="http://cmd.jiskefet.io/logs?orderBy=creationTime&orderDirection=DESC&pageSize=16&pageNumber=1"
      />
    </div>
  );
}

export default Rightspace;

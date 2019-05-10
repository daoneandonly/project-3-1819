import React from "react";

function Shortcut(data) {
  return (
    <div className="shortcut">
      <a className={data.color} href={data.link}>
        {data.text}
      </a>
    </div>
  );
}

export default Shortcut;

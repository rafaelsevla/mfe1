import React from "react";
import moment from "moment";

export default function Widget() {
  return (
    <div
      style={{
        borderRadius: "4px",
        padding: "2em",
        backgroundColor: "red",
        color: "white",
      }}
    >
      <h2>App 2 Widget</h2>
      <p>Mfe1 Moment Dep: {moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
      <span>{"auhsdahsd"}</span>
    </div>
  );
}

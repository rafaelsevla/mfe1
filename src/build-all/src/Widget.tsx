import React from "react";

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
      <p>Mfe1 Moment Dep: {new Date().toLocaleString}</p>
      <span>{"auhsdahsd"}</span>
    </div>
  );
}

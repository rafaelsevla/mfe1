import LocalButton from "./Widget";
import Card from "./Card";
import Circle from "./Circle";
import React from "react";

const App = () => (
  <div>
    {console.log('node.', process.env.NODE_ENV)}
    <h1>Dynamic Systsssssssem Host</h1>
    <h2>App 2</h2>
    <LocalButton />
    <Card />
    <Circle />
  </div>
);

export default App;

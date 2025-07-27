import React from "react";
import ReactDOM from "react-dom/client";
const header = React.createElement("div", { key: "1", id: "parent" }, [
  React.createElement("div", { key: "2", id: "child" }, [
    React.createElement("h1", {key:"2.2"}, "First H1"),
    React.createElement("h1", {key:"2.3"}, "Second H1"),
  ]),
  React.createElement("div", { key: "3", id: "child2" }, [
    React.createElement("h1", {key:"3.2"}, "First h1"),
    React.createElement("h1", {key:"3.3"}, "Seconf H1"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);

const header = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "First H1"),
    React.createElement("h1", {}, "Second H1"),
  ]),
  React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"First h1"),
    React.createElement("h1",{},"Seconf H1")
  ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);

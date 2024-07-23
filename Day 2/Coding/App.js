import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "Heading1" },
  "This my first heading"
);
const heading2 = React.createElement(
  "h2",
  { id: "Heading2" },
  "This my second heading"
);
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

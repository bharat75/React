import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="heading1" key="h1">
    Heading 1
  </h1>
);

const Title = () => {
  return <h3>Hello Dude</h3>;
};

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      {Title()}
      {heading}
      <h2>Heading2 namaste</h2>
      <h2>Heading2 react</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(<HeaderComponent />);

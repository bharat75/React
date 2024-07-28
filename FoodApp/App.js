import React from "react";
import ReactDOM from "react-dom/client";
/*
    Header
        Logo
        Home
        About Us
        Contact Us
        Cart
    Body
    Footer
*/

const title = (
  <h1 id="title" key="title">
    Food Ville
  </h1>
);

const HeaderComponent = () => {
  return (
    <div className="Header">
      {title}
      <div className="navItems">
        <ul className="navItems">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

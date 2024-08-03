import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header.js";
import BodyComponent from "./components/Body.js";
import FooterComponent from "./components/Footer.js";

/*
    Header
        Logo
        Home
        About Us
        Contact Us
        Cart
    Body
      Restraunt Cards
        Image
        Cuisines
        Rating
    Footer
*/

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

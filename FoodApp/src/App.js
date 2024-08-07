import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header.js";
import BodyComponent from "./components/Body.js";
import FooterComponent from "./components/Footer.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

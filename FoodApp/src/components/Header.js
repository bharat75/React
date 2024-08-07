import { useState } from "react";

const loggedInUser = () => {
  return true;
};

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Logo Image"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
    />
  </a>
);

const HeaderComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="Header">
      <Title />
      <div className="navItems">
        <ul className="navItems">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      {loggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;

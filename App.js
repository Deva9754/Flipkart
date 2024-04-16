import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img
          className="logo-image"
          src="https://i.pinimg.com/originals/cb/ca/38/cbca38012ddfa7faaab7591df95c2b5a.png"
          alt="Logo"
        />
      </div>
      <div className="Search">
        <input
          className="search-bar"
          type="text"
          placeholder="Search your Products"
        />
      </div>
      <div className="nav-items">
        <ul className="nav-items-list">
          <li>Login</li>
          <li>Cart</li>
          <li>Become a Seller</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="Body">
      Body
      <div>Nav-items-list</div>
      <div>Carousel</div>
      <div>Best of Products</div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

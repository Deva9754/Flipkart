import { useState } from "react";
import "./Header.css";
import { Button } from "@mui/base/Button";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [BtnReact, SetBtnReact] = useState("Login");
  return (
    <div className="Header">
      <div className="logo">
        <img
          className="logo-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR3rzJeWfV0oko1aJrSLgi7v1mdxoRvK6KaEG-_Twr&s"
          alt="Logo"
        />
      </div>
      <div className="Search">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for Products,brands and more"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {/* <button
          type="submit"
          onClick={() => {
            console.log(searchText);
          }}
        >
          Search
        </button> */}
      </div>
      <div className="nav-items">
        <ul className="nav-items-Bar">
          <Button
            className="btn"
            onClick={() => {
              BtnReact == "Login"
                ? SetBtnReact("Logout")
                : SetBtnReact("Login");
            }}
          >
            {" "}
            <i className="fa-solid fa-right-to-bracket"></i> {BtnReact}
          </Button>

          <Button className="btn">
            <i className="fa-solid fa-cart-shopping"></i>Cart
          </Button>

          <Button className="btn">
            <i className="fa-solid fa-store"></i>Become a Seller
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

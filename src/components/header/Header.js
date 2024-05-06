import { useContext, useState, useEffect } from "react";
import "./Header.css";
import { Button } from "@mui/base/Button";
import { Link } from "react-router-dom";
// import UserContext from "../../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../utils/SearchSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfProduct, setListOfProduct] = useState();
  const [filteredData, setFilteredData] = useState();
  const [BtnReact, SetBtnReact] = useState("Login");
  // const { loggedInUser, setUserName } = useContext(UserContext);
  //Api FETCHED
  const response = async () => {
    const data = await fetch("https://dummyjson.com/product");
    const result = await data.json();
    setListOfProduct(result.products);
    setFilteredData(result.products);
    // console.log(result);
  };

  useEffect(() => {
    response();
  }, []);

  //dispatch store
  const dispatch = useDispatch();
  const handleClick = (filteredData) => {
    dispatch(addItems(filteredData));
  };
  //subscribing store
  const cartItems = useSelector((store) => store?.cart?.items);

  return (
    <div className="Header">
      <div className="logo">
        <Link to={"/"}></Link>
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
        <button
          type="submit"
          onClick={() => {
            const filtered = listOfProduct.filter((product) =>
              product.title.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredData(filtered);
            handleClick(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="nav-items">
        <ul className="nav-items-Bar">
          <Link to={"/"}>
            <Button className="btn">
              <i className="fa-solid fa-house"></i>Home
            </Button>
          </Link>
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
          <Link to={"/Cart"}>
            <Button className="btn">
              <i className="fa-solid fa-cart-shopping"></i>Cart
              {cartItems.length}
            </Button>
          </Link>
          <Button className="btn">
            <i className="fa-solid fa-store"></i>Become a Seller
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

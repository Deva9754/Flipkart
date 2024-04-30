import React from "react";
import "./Body.css";
import ImageSlider from "./carousel/ImageSlider";
import images from "../../utils/Image";
// import NavItems from "../navbar/NavItems.js";
import ItemContainer from "./itemContainer/ItemContainer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
const Body = () => {
  const [listOfProduct, setListOfProduct] = useState();
  const [filteredData, setFilteredData] = useState();
  const [searchText, setSearchText] = useState();
  const response = async () => {
    const data = await fetch("https://dummyjson.com/product");
    const result = await data.json();
    setListOfProduct(result.products);
    setFilteredData(result.products);
    console.log(result);
  };

  useEffect(() => {
    response();
  }, []);

  // check whether page is online/offline

  const onlineStatus = useOnline();
  if (onlineStatus === false)
    return (
      <div className="offline">
        <h1>Something went wrong ! Please check your internet connection !!</h1>
      </div>
    );

  return (
    <div className="Body">
      {/* <NavItems /> */}
      <ImageSlider images={images} />
      <div>
        Best of Products
        <div>
          <input
            type="text"
            placeholder="search "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={() => {
              const filteredData = listOfProduct.filter((product) =>
                product.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredData(filteredData);
            }}
          >
            Search
          </button>
          <div className="item-box">
            {filteredData?.length &&
              filteredData?.map((item) => (
                <Link key={item?.id} to={"/product-card/" + item?.id}>
                  <ItemContainer resData={item} />
                </Link>
              ))}
          </div>
        </div>
        {/* <ShimmerContainer /> */}
      </div>
    </div>
  );
};
export default Body;

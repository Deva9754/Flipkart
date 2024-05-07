import React from "react";
import "./Body.css";
import ImageSlider from "./carousel/ImageSlider";
import images from "../../utils/Image";
import ItemContainer from "./itemContainer/ItemContainer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import { useSelector } from "react-redux";
import NavItems from "./navbar/NavItems";
const Body = () => {
  const [listOfProduct, setListOfProduct] = useState();
  const [filteredData, setFilteredData] = useState();
  const [searchText, setSearchText] = useState();
  const [toggle, setToggle] = useState(true);
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

  // check whether page is online/offline

  const onlineStatus = useOnline();
  if (onlineStatus === false)
    return (
      <div className="offline">
        <h1>Something went wrong ! Please check your internet connection !!</h1>
      </div>
    );

  // Subscribing store

  const SearchItems = useSelector((store) => store?.search?.items);
  return (
    <div className="Body">
      <NavItems />
      {<ImageSlider images={images} />}
      <div>
        <div>
          <div className="item-box">
            {SearchItems?.length
              ? SearchItems?.map((item) => (
                  <Link key={item?.id} to={"/product-card/" + item?.id}>
                    <ItemContainer resData={item} />
                  </Link>
                ))
              : filteredData?.length &&
                filteredData?.map((item) => (
                  <Link key={item.id} to={"/product-card/" + item?.id}>
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

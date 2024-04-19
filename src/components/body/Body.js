import React from "react";
import "./Body.css";
import ImageSlider from "./carousel/ImageSlider";
import images from "../../utils/Image";
import NavItems from "./navbar/NavItems";
import { Container } from "@mui/material";
import ItemContainer from "./itemContainer/ItemContainer";
// import ShimmerContainer from "./shimmer/ShimmerContainer";

const Body = () => {
  return (
    <div className="Body">
      <NavItems />
      <ImageSlider images={images} />
      <div>
        Best of Products
        <ItemContainer />
        {/* <ShimmerContainer /> */}
      </div>
    </div>
  );
};
export default Body;

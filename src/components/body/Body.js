import React from "react";
import "./Body.css";
import ImageSlider from "./carousel/ImageSlider";
import images from "../../utils/Image";
import NavItems from "./navbar/NavItems";

const Body = () => {
  return (
    <div className="Body">
      <NavItems />
      <ImageSlider images={images} />
      <div>Best of Products</div>
    </div>
  );
};
export default Body;

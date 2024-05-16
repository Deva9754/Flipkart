import { useEffect, useState } from "react";
import "./ItemContainer.css";
import { Shimmer } from "react-shimmer";

const ItemContainer = ({ resData }, props) => {
  const { id, images, title, price } = resData;
  return (
    <div>
      <div className="item-box">
        <div className="Item-box" key={id}>
          <img className="product-image" src={images[1]} />
          <br></br>
          <div className="Title">{title}</div>
          <br></br>
          <div className="Price">From ₹{price}</div>
        </div>
      </div>
    </div>
  );
};
export default ItemContainer;

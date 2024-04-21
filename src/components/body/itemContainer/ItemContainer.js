import { useEffect, useState } from "react";
import "./ItemContainer.css";

const ItemContainer = () => {
  const [listOfProduct, setListOfProduct] = useState();
  const response = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    setListOfProduct(result);
    console.log(result);
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <div className="item-box">
      {listOfProduct?.map((item) => (
        <div className="Item-box">
          <img className="product-image" src={item.image} />
          <br></br>
          <div className="Title">{item?.title}</div>
          <br></br>
          <div className="Price">From ₹{item?.price}</div>
        </div>
      ))}
    </div>
  );
};
export default ItemContainer;

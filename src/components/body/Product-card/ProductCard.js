import { useEffect, useState } from "react";
import "./ProductCard.css";
import ShimmerContainer from "../shimmer/ShimmerContainer";
import { useParams } from "react-router-dom";
import { DummyAPI } from "../../../utils/Constants";

const ProductCard = () => {
  const [product, setproduct] = useState({});
  const { proId } = useParams();
  console.log(proId);

  const productApi = async () => {
    const productData = await fetch(DummyAPI);
    const productJson = await productData.json();
    console.log(productJson.products);
    setproduct(productJson.products);
  };
  useEffect(() => {
    productApi();
  }, []);

  return product === null ? (
    <ShimmerContainer />
  ) : (
    <div>
      <div className="item-box">
        {product?.length &&
          product?.map((item) => (
            <div className="Item-box" key={item?.id}>
              <img className="product-image" src={item?.images[0]} />
              <br></br>
              <div className="Title">{item?.title}</div>
              <br></br>
              <div className="Price">From ₹{item?.price}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ProductCard;

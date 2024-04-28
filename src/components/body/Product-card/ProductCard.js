import { useEffect, useState } from "react";
import "./ProductCard.css";
import ShimmerContainer from "../shimmer/ShimmerContainer";
import { useParams } from "react-router-dom";
import { DummyAPI } from "../../../utils/Constants";
import StarIcon from "@mui/icons-material/Star";

const ProductCard = () => {
  const [product, setproduct] = useState({});
  const { proId } = useParams();
  console.log(proId);

  const productApi = async () => {
    const productData = await fetch(DummyAPI + proId);
    const productJson = await productData.json();
    console.log(productJson);
    setproduct(productJson);
  };
  useEffect(() => {
    productApi();
  }, []);

  const {
    id,
    title,
    discountPercentage,
    images,
    brand,
    price,
    description,
    rating,
    thumbnail,
  } = product;

  return (
    <>
      <div className="product-box">
        <div className="product-img">
          <img
            className="image"
            src={images?.length && images[0]}
            alt="image-loading"
          />
        </div>
        <div className="product-description">
          <div className="product-descriptio-box">
            <span className="title">{title}</span>
            <h4>{brand}</h4>
            <p>{description}</p>

            <span className="rating-box">
              {rating}
              {<StarIcon />}
            </span>
          </div>

          {/* <div>
      <img src={thumbnail} alt="thumbnail" />
    </div> */}
          <div className="rating">Special Price</div>
          <h1> ₹{price}</h1>
          <span className="discount">{discountPercentage}% off</span>
        </div>
      </div>
      <div className="Buy-btn">
        <button className="add-btn">ADD TO CART</button>
        <button className=" add-btn buy-btn">BUY NOW</button>
      </div>
    </>
  );
};
export default ProductCard;

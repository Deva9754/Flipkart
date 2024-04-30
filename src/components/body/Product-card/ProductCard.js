import "./ProductCard.css";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import useProductCard from "../../../utils/useProductCard";

const ProductCard = () => {
  const { proId } = useParams();

  // custom hooks
  const product = useProductCard(proId);

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
        <div className="product-img" key={id}>
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

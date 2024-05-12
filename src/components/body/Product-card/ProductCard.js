import "./ProductCard.css";
import { Link, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import useProductCard from "../../../utils/useProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../../utils/CartSlice";
import NavItems from "../navbar/NavItems";
import ShimmerContainer from "../shimmer/ShimmerContainer";
import AddButton from "../../button/AddButton";

const ProductCard = () => {
  const { proId } = useParams();

  const cartItems = useSelector((store) => store?.cart?.items);

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
    stock,
  } = product;
  if (product.length === 0) return <ShimmerContainer />;

  const dispatch = useDispatch();
  const handleAddItem = (product) => {
    dispatch(addItems(product));
  };

  window.scrollTo(0, 0);

  return (
    <>
      <NavItems />
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
            <span className="rating-box">stock : {stock}</span>
          </div>

          <div className="rating">Special Price</div>
          <h1> ₹{price}</h1>
          <span className="discount">{discountPercentage}% off</span>
        </div>
      </div>

      <div className="Buy-btn">
        <AddButton />
        {/* <button
          className="add-btn"
          onClick={() => {
            handleAddItem(product);
            handleClickOpen();
          }}
        >
          ADD TO CART
        </button> */}
      </div>
    </>
  );
};
export default ProductCard;

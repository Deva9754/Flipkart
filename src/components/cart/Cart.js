import { useContext } from "react";
import UserContext from "../../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import { clearCart, removeItems } from "../../utils/CartSlice";
import { Button } from "@mui/material";
import "./Cart.css";

const Cart = () => {
  // const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearItems = () => {
    dispatch(clearCart());
  };
  const handleRemoveItems = () => {
    dispatch(removeItems());
  };
  console.log(cartItems[0]?.price);

  return (
    <div>
      {cartItems.map((items) => (
        <div className="cart-box">
          <div className="cart-box">
            <div className="product-img" key={items?.id}>
              <img
                className="cart-image"
                src={items?.thumbnail}
                alt="image-loading"
              />
            </div>
            <div className="product-description">
              <div className="product-descriptio-box">
                <span className="title">{items?.title}</span>
                <h4>{items?.brand}</h4>
                <p>{items?.description}</p>

                <span className="rating-box">
                  {items?.rating}
                  {<StarIcon />}
                </span>
              </div>

              <div className="rating">Special Price</div>
              <h3> ₹{items?.price}</h3>
              <span className="discount">{items?.discountPercentage}% off</span>
            </div>
            <div>
              <Button onClick={() => handleRemoveItems(cartItems)}>
                Remove
              </Button>
            </div>
          </div>
        </div>
      ))}
      <div className="cart-empty">
        {" "}
        {cartItems.length === 0 && <h1> Please add some items Hungry !!</h1>}
      </div>

      <div className="Buy-btn">
        <button className="add-btn" onClick={() => handleClearItems(cartItems)}>
          Clear Cart
        </button>
      </div>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>Price: {item.price}</p>
          </div>
        ))}
        <h4>
          Total Price:{" "}
          {cartItems.reduce((total, item) => total + item.price, 0)}
        </h4>
      </div>
    </div>
  );
};
export default Cart;

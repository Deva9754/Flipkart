import { useContext } from "react";
import UserContext from "../../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import { clearCart, removeItems } from "../../utils/CartSlice";
import { Button } from "@mui/material";
import "./Cart.css";
import { Link } from "react-router-dom";
import BecomeSeller from "../locationcheck/LocationCheck";

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
  window.scrollTo(0, 0);

  // Total amount
  const totalPriceBeforeDiscount = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );
  const packingFee = 69;
  const totalDiscountedPrice = cartItems.reduce((total, item) => {
    const discountedPrice =
      item.price - item.price * (item.discountPercentage / 100);
    return total + discountedPrice + packingFee;
  }, 0);
  //Discount
  const discount = cartItems.reduce(
    (total, item) => total + item.discountPercentage,
    0
  );
  const saveAmount = Math.abs(totalPriceBeforeDiscount - totalDiscountedPrice);

  return (
    <div>
      <>
        {cartItems.length ? (
          <div className="cart">
            <div className="cart-body">
              {/* <div className="cart-check-pin">
              {" "}
              <h4> Deliver to:</h4>
              <div className="cart-check-text">
                {" "}
                <Button>Change</Button>
              </div>
            </div> */}
              {<BecomeSeller />}
              {cartItems.map((items) => (
                <div className="cart-order">
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
                    <span className="discount">
                      {items?.discountPercentage}% off
                    </span>
                  </div>
                  <div className="cart-remove-btn">
                    <Button onClick={() => handleRemoveItems(cartItems)}>
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-checkout">
              {" "}
              <div>
                <div className="cart-checkout-box">
                  <div className="cart-checkout-box-text">PRICE DETAILS</div>
                </div>
                <div className="cart-checkout-details">
                  <div className="cart-checout-price-text">
                    Price ({cartItems.length}items)
                  </div>
                  <div>
                    <h4>
                      {" "}
                      ₹
                      {cartItems.reduce((total, item) => total + item.price, 0)}
                    </h4>
                  </div>
                </div>
                <div className="cart-checkout-details">
                  <div className="cart-checout-price-text">Discount</div>
                  <div className="discount">-{discount.toFixed(1)}%</div>
                </div>
                <div className="cart-checkout-details">
                  <div className="cart-checout-price-text">Packing Fee</div>
                  <div>₹{packingFee}</div>
                </div>
                <div className="cart-checkout-details">
                  <div className="total-amount">Total Amount</div>
                  <div className="total-amount-digit">
                    ₹{totalDiscountedPrice.toFixed(2)}
                  </div>
                </div>
                <div className="cart-checkout-details">
                  <div className="total-saving">
                    You will save ₹{saveAmount.toFixed(0)} on this order
                  </div>
                </div>
                <div className="Buy-btn">
                  <button className="place-order-btn">PLACE ORDER</button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className="cart-empty">
            <div className="cart-empty">
              <img
                className="cart-empty-img"
                src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                alt=""
              />
            </div>
            <div className="cart-empty-text">
              {" "}
              Please add some items Hungry !!
            </div>
          </div>
        )}
      </>

      {cartItems.length ? (
        <div className="Buy-btn">
          <button
            className="add-btn"
            onClick={() => handleClearItems(cartItems)}
          >
            Clear Cart
          </button>
        </div>
      ) : (
        <div className="Buy-btn">
          <Link to={"/"}>
            <button className="shop-btn">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Cart;

{
  /* <div>
Total Price:{" "}
{cartItems.reduce((total, item) => total + item.price, 0)}
</div> */
}

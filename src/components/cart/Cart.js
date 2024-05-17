import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import { addItems, clearCart, removeItems } from "../../utils/CartSlice";
import { Button } from "@mui/material";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Remove } from "@mui/icons-material";

const Cart = () => {
  window.scrollTo(0, 0);
  const [count, setCount] = useState(1);
  const cartItems = useSelector((store) => store.cart.items);
  const uniqueItemIds = [];
  const dispatch = useDispatch();

  const handleClearItems = () => {
    dispatch(clearCart());
  };
  const handleRemoveItems = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    dispatch(removeItems());
  };
  const handleAddItems = (items) => {
    setCount((prevCount) => prevCount + 1);
    dispatch(addItems(items));
  };

  // Total amount
  const totalPriceBeforeDiscount = cartItems.reduce(
    (total, item) => total + item?.price,
    0
  );
  const packingFee = 69;
  const totalDiscountedPrice = cartItems.reduce((total, item) => {
    const discountedPrice =
      item?.price - item?.price * (item?.discountPercentage / 100);
    return total + discountedPrice + packingFee;
  }, 0);
  //Discount
  const discount = cartItems.reduce(
    (total, item) => total + item?.discountPercentage,
    0
  );
  const saveAmount = Math.abs(totalPriceBeforeDiscount - totalDiscountedPrice);
  const navigate = useNavigate();

  //placeOrder
  const handlePlaceOrder = () => {
    setTimeout(() => {
      navigate("/"); // Redirect to the home page
    }, 8000);
  };
  // ADD

  return (
    <div>
      {cartItems.length ? (
        <div className="cart">
          <div className="cart-body">
            {cartItems.map((items) => {
              if (!uniqueItemIds.includes(items.id)) {
                uniqueItemIds.push(items.id);
                return (
                  <div className="cart-order" key={items?.id}>
                    <div className="product-img">
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
                          <StarIcon />
                        </span>
                        <div className="rating">Special Price</div>
                        <h3> ₹{items?.price}</h3>
                        <span className="discount">
                          {items?.discountPercentage}% off
                        </span>
                      </div>
                    </div>

                    <div className="cart-remove-btn">
                      <Button onClick={() => handleRemoveItems(items)}>
                        Remove
                      </Button>
                    </div>
                    <div>
                      <Button onClick={() => handleAddItems(items)}>
                        <AddIcon />
                      </Button>
                      {count}
                      <Button
                        onClick={() => handleRemoveItems()}
                        disabled={count === 0}
                      >
                        <Remove />
                      </Button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="cart-checkout">
            <div>
              <div className="cart-checkout-box">
                <div className="cart-checkout-box-text">PRICE DETAILS</div>
              </div>
              <div className="cart-checkout-details">
                <div className="cart-checout-price-text">
                  Price ({cartItems.length} items)
                </div>
                <div>
                  <h4>
                    {" "}
                    ₹
                    {cartItems?.reduce((total, item) => total + item?.price, 0)}
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
              <Link to={"/placeorder"}>
                <div className="Buy-btn">
                  <button
                    className="place-order-btn"
                    onClick={() => {
                      handlePlaceOrder();
                      handleClearItems();
                    }}
                  >
                    PLACE ORDER
                  </button>
                </div>
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <img
            className="cart-empty-img"
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt=""
          />
          <div className="cart-empty-text">Please add some items Hungry !!</div>
        </div>
      )}

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
          <Link to={"/"} className="link">
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

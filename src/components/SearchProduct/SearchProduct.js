import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { forwardRef, useState } from "react";
import useSearchProduct from "../../utils/useSearchProduct";
import "./SearchProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../utils/CartSlice";
import SearchSkeleton from "./SearchSkeleton";
import NavItems from "../body/navbar/NavItems";
import { Slide } from "@mui/material";

const Searchproduct = () => {
  const [open, setOpen] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();

  //custom alert

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cartItems = useSelector((store) => store?.cart?.items);
  // SearchResult.js
  const { loading, searchProduct } = useSearchProduct(params?.ProTitle);

  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  if (loading) {
    return <SearchSkeleton />;
  }

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div className="serach-box">
      <NavItems />
      {searchProduct?.products?.length &&
        searchProduct?.products?.map((item) => (
          <React.Fragment key={item?.id}>
            <div className="Search-box">
              <div className="product-img">
                <img
                  className="image"
                  src={item?.images?.length && item?.images[0]}
                  alt="image-loading"
                />
              </div>
              <div className="product-description">
                <div className="product-descriptio-box">
                  <span className="title">{item?.title}</span>
                  <h4>{item?.brand}</h4>
                  <p>{item?.description}</p>

                  <span className="rating-box">
                    {item?.rating}
                    {/* <StarIcon /> */}
                  </span>
                  <span className="stock-box">
                    {item?.stock}
                    {/* <StarIcon /> */}
                  </span>
                  <div className="rating">Special Price</div>
                  <h1> ₹{item?.price}</h1>
                  <span className="discount">
                    {item?.discountPercentage}% off
                  </span>
                </div>
              </div>
            </div>
            <div className="search-Buy-btn">
              <div>
                <button
                  className="add-btn"
                  onClick={() => {
                    handleAddItem(item);
                    handleClickOpen();
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
              maxWidth="xs"
              TransitionComponent={Transition}
              keepMounted
            >
              <DialogTitle id="responsive-dialog-title">
                {"Cart is ready !!"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  You Added {cartItems.length} items to the cart.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose}>
                  Cancel
                </Button>
                <Link to={"/Cart"} style={{ textDecoration: "none" }}>
                  <Button autoFocus color="primary">
                    Go to cart
                  </Button>
                </Link>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        ))}
    </div>
  );
};

export default Searchproduct;

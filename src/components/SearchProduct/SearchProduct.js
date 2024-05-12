import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

import useSearchProduct from "../../utils/useSearchProduct";
import "./Searchproduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../utils/CartSlice";
import SearchSkeleton from "./SearchSkeleton";
import NavItems from "../body/navbar/NavItems";

const Searchproduct = () => {
  const { ProTitle } = useParams();

  //custom alert
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cartItems = useSelector((store) => store?.cart?.items);
  // SearchResult.js
  const { loading, searchProduct } = useSearchProduct(ProTitle);
  console.log(searchProduct?.products);

  if (loading) {
    return (
      <div>
        <SearchSkeleton />
      </div>
    );
  }

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div className="serach-box">
      <NavItems />
      {searchProduct?.products?.length &&
        searchProduct?.products?.map((item) => (
          <>
            <div className="Search-box" key={item?.id}>
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
                </div>

                <div className="rating">Special Price</div>
                <h1> ₹{item?.price}</h1>
                <span className="discount">
                  {item?.discountPercentage}% off
                </span>
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
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
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
                <Link to={"/Cart"}>
                  <Button autoFocus>Go to cart</Button>
                </Link>
              </DialogActions>
            </Dialog>
          </>
        ))}
    </div>
  );
};

export default Searchproduct;

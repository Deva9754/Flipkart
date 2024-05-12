import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../utils/CartSlice";
import { Link, useParams } from "react-router-dom";
import useProductCard from "../../utils/useProductCard";
const AddButton = () => {
  const { proId } = useParams();
  const product = useProductCard(proId);

  // custom Alert
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const handleAddItem = (product) => {
    dispatch(addItems(product));
  };

  const cartItems = useSelector((store) => store?.cart?.items);
  return (
    <div>
      <button
        className="add-btn"
        onClick={() => {
          handleAddItem(product);
          handleClickOpen();
        }}
      >
        ADD TO CART
      </button>
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
    </div>
  );
};
export default AddButton;

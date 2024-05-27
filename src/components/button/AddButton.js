import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../utils/CartSlice";
import { Link, useParams } from "react-router-dom";
import useProductCard from "../../utils/useProductCard";
import "./AddButton.css";
import { Slide } from "@mui/material";
const AddButton = () => {
  const { proId } = useParams();
  const product = useProductCard(proId);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const cartItems = useSelector((store) => store?.cart?.items);

  // custom Alert
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddItem = (product) => {
    dispatch(addItems(product));
  };

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
          <Link to={"/Cart"} style={{ textDecoration: "none" }}>
            <Button autoFocus color="primary">
              Go to cart
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AddButton;

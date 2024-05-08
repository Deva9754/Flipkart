import { useContext, useState, useEffect } from "react";
import "./Header.css";
import { Button } from "@mui/base/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../utils/SearchSlice";
// Login modal
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfProduct, setListOfProduct] = useState();
  const [BtnReact, SetBtnReact] = useState("Login");
  // Login modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    Height: 528,
    bgcolor: "background.paper",
    boxShadow: 24,
    display: "flex",
  };
  // const { loggedInUser, setUserName } = useContext(UserContext);
  //Api FETCHED
  const response = async () => {
    const data = await fetch("https://dummyjson.com/product");
    const result = await data.json();
    setListOfProduct(result.products);
    // console.log(result);
  };

  useEffect(() => {
    response();
  }, []);

  //dispatch store
  const dispatch = useDispatch();
  const handleClick = () => {
    const filtered = listOfProduct.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    dispatch(addItems(filtered));
    setSearchText("");
  };
  //subscribing store
  const cartItems = useSelector((store) => store?.cart?.items);

  return (
    <div className="Header">
      <div className="logo">
        <Link to={"/"}></Link>
        <img
          className="logo-image"
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="Logo"
        />

        <div className="explore-logo">
          <div className="explore">Explore</div>
          <div className="img-plus">
            <img
              className="plus-image"
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
            ></img>
            <span className="plus">Plus</span>
          </div>
        </div>
      </div>

      <div className="Search">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for Products,brands and more"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button type="submit" className="Search-submit" onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="nav-items">
        <ul className="nav-items-Bar">
          <Link to={"/"}>
            <button className="btn">
              <i className="fa-solid fa-house"></i>Home
            </button>
          </Link>

          <button className="btn" onClick={handleOpen}>
            <i className="fa-solid fa-right-to-bracket"></i> {BtnReact}
          </button>

          <Link to={"/Cart"}>
            <button className="btn">
              <i className="fa-solid fa-cart-shopping"></i>Cart
              {cartItems.length}
            </button>
          </Link>
          <Link to={"/becomeseller"}>
            <button className="btn">
              <i className="fa-solid fa-store"></i>Become a Seller
            </button>
          </Link>
        </ul>
      </div>
      <div>
        {/* <Button onClick={handleOpen}>Login</Button> */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                sx={{
                  backgroundColor: "#2874f0",
                  height: 528,
                  width: 336,
                  p: 3,
                  bottom: 0,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 500,
                    fontSize: "32px",
                    color: "white",
                  }}
                >
                  Login
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "150%",
                    color: "#dfdfdf",
                  }}
                >
                  Get access to your Orders,<br></br> Wishlist and
                  Recommendations
                </Typography>
                <Typography sx={{ pt: 16 }}>
                  <img
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                    alt=""
                  />
                </Typography>
              </Typography>

              {/* input */}
              <Typography
                id="transition-modal-description"
                sx={{
                  mt: 2,
                  display: "flex",
                  p: 2,
                  flexDirection: "column",
                }}
              >
                <TextField
                  id="standard-basic"
                  label="Enter email"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Enter Password"
                  variant="standard"
                />{" "}
                <Typography sx={{ fontSize: "12px", mt: 2 }}>
                  By continuing, you agree to Flipkart's Terms of Use and
                  Privacy Policy.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <Button
                    sx={{
                      backgroundColor: "#fb641b",
                      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .2)",
                      border: "none",
                      paddingLeft: 14,
                      paddingRight: 14,

                      color: "#fff",
                    }}
                  >
                    Login
                  </Button>
                </Typography>
                <Typography
                  sx={{ paddingTop: 26, color: "#2874f0", cursor: "pointer" }}
                >
                  New to Flipkart? Create an account
                </Typography>
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default Header;

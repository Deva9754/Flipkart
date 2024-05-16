import { useState, useEffect } from "react";
import "./Header.css";
import { Button } from "@mui/base/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../utils/SearchSlice";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Badge, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Store } from "@mui/icons-material";
//
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfProduct, setListOfProduct] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 650,
    height: "auto",
    maxHeight: "90vh",
    bgcolor: "background.paper",
    boxShadow: 24,
    display: "flex",
    flexDirection: "row",
  };

  // Media query for max-width of 768px
  const mediaQuery = "@media (max-width: 768px)";

  const stylesFor768px = {
    flexDirection: "column",
    width: "100%",
    maxWidth: "100%",
  };

  const mergedStyle = {
    ...style,
    [mediaQuery]: stylesFor768px,
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "password") {
      // Successful login
      setLoggedIn(true);
      handleClose();
    } else {
      // Failed login
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    // Redirect to home
    navigate("/");
  };

  //dispatch store
  const dispatch = useDispatch();
  const handleClick = () => {
    const filtered = listOfProduct.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    dispatch(addItems(filtered));
    setSearchText("");
    console.log(filtered);
  };

  //subscribing store
  const cartItems = useSelector((store) => store?.cart?.items);

  const onChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <div className="Header">
        <div className="logo">
          <Link to="/" className="link">
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
                />
                <div className="plus">Plus</div>
              </div>
            </div>
          </Link>
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
          <Link to={"/SearchProduct/" + searchText}>
            <button
              type="submit"
              className="Search-submit"
              onClick={handleClick}
            >
              Search
            </button>
          </Link>
        </div>
        <div className="nav-items">
          <div className="nav-items-Bar">
            <Link to={"/"}>
              <Button variant="contained" startIcon={<HomeIcon />}>
                Home
              </Button>
            </Link>

            {!loggedIn ? (
              <Button
                variant="contained"
                onClick={handleOpen}
                startIcon={<LoginIcon />}
              >
                Login
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleLogout}
                startIcon={<LogoutIcon />}
              >
                <span> Logout</span>
              </Button>
            )}

            <Link to={"/Cart"}>
              <StyledBadge badgeContent={cartItems.length} color="primary">
                <Button variant="contained" startIcon={<ShoppingCartIcon />}>
                  Cart
                </Button>
              </StyledBadge>
            </Link>
            <Link to={"/becomeseller"}>
              <Button variant="contained" startIcon={<Store />}>
                Seller
              </Button>
            </Link>
          </div>
        </div>
        <div>
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
              <Box sx={mergedStyle}>
                <Typography
                  sx={{
                    backgroundColor: "#2874f0",

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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <TextField
                    id="standard-basic"
                    label="Enter Password"
                    type="password"
                    variant="standard"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />{" "}
                  <Typography sx={{ fontSize: "12px", mt: 2 }}>
                    By continuing, you agree to Flipkart's Terms of Use and
                    Privacy Policy.
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    <Button
                      onClick={handleSubmit}
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
                    <p>{error}</p>
                  </Typography>
                  {/* <Typography>{message}</Typography> */}
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
    </>
  );
};

export default Header;

import "./Footer.css";
import StoreIcon from "@mui/icons-material/Store";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import RedeemIcon from "@mui/icons-material/Redeem";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer">
        <div className="footer-left">
          <div>
            <p>ABOUT</p>
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Carrers</li>
              <li>Flipkart Stories</li>
              <li>press </li>
            </ul>
          </div>

          <div>
            <p>GROUP COMPANIES</p>
            <ul>
              <li> Myntra</li>
              <li>Flipkart Wholesale </li>
              <li>Cleartrip</li>
              <li>Shopsy </li>
            </ul>
          </div>

          <div>
            <p>HELP</p>
            <ul>
              <li>Payment</li>
              <li>Cancellations Returns</li>
              <li>Shipping</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <p>CONSUMER POLICY</p>
            <ul>
              <li>Cancellations Returns</li>
              <li>Terms of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>ERP Compilance</li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
        <div className="footer-right">
          <div>
            <p>Mail Us</p>
            <br></br>
            <span className="address">
              Vaishnavi Summit, Ground Floor, 7th Main, 80 Feet Road, 3rd Block,
              Koramangala Industrial Layout, Bangalore KA IN 560034.
            </span>
            <br></br>
            <span className="social">Social</span>
            <div className="social-icon"></div>
          </div>
          <div>
            <p>Register Office Address</p>
            <br></br>
            <span>
              {" "}
              Vaishnavi Summit, Ground Floor, 7th Main, 80 Feet Road, 3rd Block,
              Koramangala Industrial Layout, Bangalore, Karnataka, India 560034
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          {" "}
          <StoreIcon
            sx={{
              width: 15,
              color: "yellow",
            }}
          />{" "}
          Become a Seller
        </div>
        <div className="footer-bottom-links">
          {" "}
          <PriceCheckIcon
            sx={{
              width: 15,
              color: "yellow",
            }}
          />{" "}
          Advertise
        </div>
        <div className="footer-bottom-links">
          <RedeemIcon
            sx={{
              width: 15,
              color: "yellow",
            }}
          />{" "}
          Gift Card
        </div>
        <div className="footer-bottom-links">
          <HelpOutlineIcon
            sx={{
              width: 15,
              color: "yellow",
            }}
          />{" "}
          Help Center
        </div>
        <div className="footer-bottom-links"> © 2007-2024 Flipkart.com</div>
      </div>
    </div>
  );
};
export default Footer;

import "./Footer.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
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
            <span>
              Vaishnavi Summit, Ground Floor, 7th Main, 80 Feet Road, 3rd Block,
              Koramangala Industrial Layout, Bangalore KA IN 560034.
            </span>
            <br></br>
            <span className="social">Social</span>
            <div className="social-icon">
              <YouTubeIcon />
            </div>
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
      <div>info</div>
    </div>
  );
};
export default Footer;

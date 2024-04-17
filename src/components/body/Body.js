import "./Body.css";
import ImageSlider from "./carousel/ImageSlider";
import images from "../../utils/Image";

const Body = () => {
  return (
    <div className="Body">
      <div className="nav-items">
        <ul className="nav-items-list">
          <li>Electronics</li>
          <li>TVs & Appliances</li>
          <li>Men</li>
          <li>Women</li>
          <li>Home & Furniture</li>
          <li>Sports</li>
          <li>Books & More</li>
          <li>Flights</li>
          <li>Offer Zone</li>
        </ul>
      </div>
      <ImageSlider images={images} />
      <div>Best of Products</div>
    </div>
  );
};
export default Body;

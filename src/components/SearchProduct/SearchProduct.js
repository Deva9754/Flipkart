import ShimmerContainer from "../body/shimmer/ShimmerContainer";
import { Link, useParams } from "react-router-dom";

import useSearchProduct from "../../utils/useSearchProduct";

const Searchproduct = () => {
  const { ProTitle } = useParams();
  // SearchResult.js
  const { loading, searchProduct } = useSearchProduct(ProTitle);
  console.log(searchProduct?.products);

  if (loading) {
    return (
      <div>
        <ShimmerContainer />
      </div>
    );
  }

  // const {
  //   id,
  //   title,
  //   discountPercentage,
  //   images,
  //   brand,
  //   price,
  //   description,
  //   rating,
  // } = searchProduct?.products[1];

  return (
    <div>
      <h2>Search Results</h2>

      {searchProduct?.products?.length &&
        searchProduct?.products?.map((item) => (
          <div className="product-box" key={item?.id}>
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
              <span className="discount">{item?.discountPercentage}% off</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Searchproduct;

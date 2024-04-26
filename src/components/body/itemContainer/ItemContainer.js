import { useEffect, useState } from "react";
import "./ItemContainer.css";
import { Shimmer } from "react-shimmer";

const ItemContainer = () => {
  const [listOfProduct, setListOfProduct] = useState();
  const [filteredData, setFilteredData] = useState();
  const [searchText, setSearchText] = useState();
  const response = async () => {
    const data = await fetch("https://dummyjson.com/product");
    const result = await data.json();
    setListOfProduct(result.products);
    setFilteredData(result.products);
    console.log(result);
  };
  +useEffect(() => {
    response();
  }, []);

  return listOfProduct?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <input
        type="text"
        placeholder="search "
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          const filteredData = listOfProduct.filter((product) =>
            product.title.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredData(filteredData);
        }}
      >
        Search
      </button>
      <div className="item-box">
        {filteredData?.length &&
          filteredData?.map((item) => (
            <link to={"/product-card/" + item?.id}>
              <div className="Item-box" key={item.id}>
                <img className="product-image" src={item?.images[1]} />
                <br></br>
                <div className="Title">{item?.title}</div>
                <br></br>
                <div className="Price">From ₹{item?.price}</div>
              </div>
            </link>
          ))}
      </div>
    </div>
  );
};
export default ItemContainer;

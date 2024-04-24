import { useEffect, useState } from "react";
import "./ItemContainer.css";
import { Shimmer } from "react-shimmer";

const ItemContainer = () => {
  const [listOfProduct, setListOfProduct] = useState();
  const [filteredData, setFilteredData] = useState();
  const [searchText, setSearchText] = useState();
  const response = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    setListOfProduct(result);
    setFilteredData(result);
    console.log(result);
  };

  useEffect(() => {
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
        {filteredData?.map((item) => (
          <div className="Item-box" key={item.id}>
            <img className="product-image" src={item.image} />
            <br></br>
            <div className="Title">{item?.title}</div>
            <br></br>
            <div className="Price">From ₹{item?.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemContainer;

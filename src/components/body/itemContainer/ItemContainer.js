import "./ItemContainer.css";

const ItemContainer = () => {
  return (
    <div>
      ItemContainer
      <div className="Item-box">
        <img
          className="product-image"
          src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"
          alt="product-img"
        />
        <br></br>
        <span>Product-name</span>
        <br></br>
        <span>Product-price</span>
      </div>
    </div>
  );
};
export default ItemContainer;

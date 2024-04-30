import { useState, useEffect } from "react";
import { DummyAPI } from "./Constants";

const useProductCard = (proId) => {
  const [product, setProduct] = useState("");

  const productApi = async () => {
    const productData = await fetch(DummyAPI + proId);
    const productJson = await productData.json();
    console.log(productJson);
    setProduct(productJson);
  };
  useEffect(() => {
    productApi();
  }, []);
  return product;
};

export default useProductCard;

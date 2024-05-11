import { useEffect, useState } from "react";

const useSearchProduct = (proTitle) => {
  const [loading, setLoading] = useState(true);
  const [searchProduct, setSearchProduct] = useState([]);

  const searchApi = async () => {
    try {
      const data = await fetch(
        `https://dummyjson.com/products/category/${proTitle}`
      );
      const response = await data.json();
      setSearchProduct(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    searchApi();
  }, [proTitle]);

  return { loading, searchProduct };
};
export default useSearchProduct;

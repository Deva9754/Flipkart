import { useEffect } from "react";

const useSearchProduct = (Category) => {
  const [searchProduct, setSearchProduct] = useState();

  const searchApi = async () => {
    const data = await fetch(
      `https://dummyjson.com/products/search?q=${Category}`
    );
    const response = await data.json();
    setSearchProduct(response);
  };
  useEffect(() => {
    searchApi();
  }, []);
  return searchProduct;
};
export default useSearchProduct;

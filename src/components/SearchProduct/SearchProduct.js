import { useSelector } from "react-redux";
import ShimmerContainer from "../body/shimmer/ShimmerContainer";
import { Link } from "react-router-dom";
import ItemContainer from "../body/itemContainer/ItemContainer";

// const Searchproduct = () => {
//   // SearchResult.js
//   const { proTitle } = useParams();
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {

//         const response = await fetch(
//           "https://dummyjson.com/products/search?q=${proTitle}"
//         );
//        setProducts(response.data);

//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const filtered = products.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [proTitle, products]);

//   const SearchResult = () => {
//     return (
//       <div>
//         <h2>Search Results</h2>
//         <ul>
//           {filteredProducts.map((product) => (
//             <li key={product.id}>{product.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
// };
// export default Searchproduct;

const SearchProduct = () => {
  //subscribing store
  const SearchItems = useSelector((store) => store?.search?.items);
  console.log(SearchItems.title);
  return (
    <div>
      {SearchItems?.length > 0 ? (
        SearchItems?.map((item) => {
          <Link key={item.id} to={"/product-card/" + item?.id} className="link">
            <ItemContainer resData={item} />
          </Link>;
        })
      ) : (
        <ShimmerContainer />
      )}
    </div>
  );
};

export default SearchProduct;

{
  /* <div>{filteredData?.length &&
      filteredData?.map((item) => (
        <Link
          key={item.id}
          to={"/product-card/" + item?.id}
          className="link"
        >
          <ItemContainer resData={item} />
        </Link>
        }
        </div>; */
}

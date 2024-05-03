import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const Cart = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>cart is ready please go checkout the product !! </h1>
      <h3>{loggedInUser}</h3>
    </div>
  );
};
export default Cart;

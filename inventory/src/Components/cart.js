import { useContext } from "react";
import "./Cart.css";
import MedContext from "./Store/Context";
const Cart = ({ showCartHandler }) => {
  const cartCnxt = useContext(MedContext);
  const { cart } = useContext(MedContext);

  let totalQuantity = 0;
  totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <button className="btn" onClick={showCartHandler}>
      Your Cart {totalQuantity}
    </button>
  );
};

export default Cart;

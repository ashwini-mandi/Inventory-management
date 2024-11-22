import { useContext } from "react";
import "./Cart.css";
import MedContext from "./Store/Context";
const Cart = () => {
  //   const cartCnxt = useContext(MedContext);
  const { cart } = useContext(MedContext);
  console.log(cart, "cart");
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return <button className="btn">Your Cart {totalQuantity}</button>;
};

export default Cart;

import Modal from "./Modal";
import "./Mform.css";
import { useContext } from "react";
import MedContext from "../Store/Context";

const ModalForm = ({ onClose }) => {
  const { cart } = useContext(MedContext); // Fetch the cart from context

  // Dynamically render cart items with a single row for labels
  const cartItems = (
    <ul className="cart-items">
      <li className="cart-header">
        <span className="item-label">Name</span>
        <span className="item-label">Price</span>
        <span className="item-label">Quantity</span>
      </li>
      {cart.map((item) => (
        <li key={item.id}>
          <span className="name">{item.name}</span>
          <span className="price">Rs. {item.price}</span>
          <span className="quantity">{item.quantity}</span>
        </li>
      ))}
    </ul>
  );

  const totalAmount = cart
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <Modal onClose={onClose}>
      <div className="modal-content">
        {cartItems}
        <div className="total">
          <span>Total Amount</span>
          <span>Rs.{totalAmount}</span>
        </div>
        <div className="actions">
          <button className="button--alt" onClick={onClose}>
            Close
          </button>
          <button className="button">Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalForm;

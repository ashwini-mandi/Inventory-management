import { useState } from "react";
import "./App.css";
import Main from "./Components/Main";
import CartProvider from "./Components/Store/Context-Provider";
import Cart from "./Components/cart";
import ModalForm from "./Components/Modal/ModalForm";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const cartData = [
    { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
    { id: "c2", name: "Pizza", amount: 1, price: 15.99 },
  ];

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <CartProvider>
      <div className="App">
        <div style={{ display: "flex" }}>
          <Main />
          <Cart showCartHandler={showCartHandler} />
        </div>
        {cartShown && (
          <ModalForm onClose={hideCartHandler} cartItems={cartData} />
        )}
      </div>
    </CartProvider>
  );
}

export default App;

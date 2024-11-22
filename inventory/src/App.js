import "./App.css";
// import Form from "./Components/MedicineForm";
import Main from "./Components/Main";
import CartProvider from "./Components/Store/Context-Provider";
import Cart from "./Components/cart";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <div style={{ display: "flex" }}>
          <Main />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;

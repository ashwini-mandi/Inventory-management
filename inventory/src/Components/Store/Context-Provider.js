import React, { useState } from "react";
import MedContext from "./Context";

const CartProvider = (props) => {
  const [medicines, setMedicines] = useState([
    {
      id: "1",
      name: "Medicine A",
      description: "Pain relief",
      price: 100,
      quantity: 5,
    },
    {
      id: "2",
      name: "Medicine B",
      description: "Cold relief",
      price: 50,
      quantity: 3,
    },
  ]);

  const [cart, setCart] = useState([]);

  // Function to add medicines to the list
  const addMedicines = (newMedicine) => {
    setMedicines((prevMedicines) => [...prevMedicines, newMedicine]);
  };

  // Function to add an item to the cart and reduce its stock
  const addToCart = (medicine) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === medicine.id);
      if (existingItem) {
        existingItem.quantity++;
        return [...prevCart];
      }
      return [...prevCart, { ...medicine, quantity: 1 }];
    });

    setMedicines((prevMedicines) =>
      prevMedicines.map((med) =>
        med.id === medicine.id ? { ...med, quantity: med.quantity - 1 } : med
      )
    );
  };

  const medContext = {
    medicines,
    cart,
    addMedicines,
    addToCart,
  };

  return (
    <MedContext.Provider value={medContext}>
      {props.children}
    </MedContext.Provider>
  );
};

export default CartProvider;

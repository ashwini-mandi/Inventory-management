import React, { useState } from "react";
import MedContext from "./Context";

const CartProvider = (props) => {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);

  const addMedicines = (newMedicine) => {
    setMedicines((prevMedicines) => [...prevMedicines, newMedicine]);
  };

  const addToCart = (medicine) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === medicine.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === medicine.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...medicine, quantity: 1 }];
    });

    setMedicines((prevMedicines) =>
      prevMedicines.map((med) =>
        med.id === medicine.id && med.quantity > 0
          ? { ...med, quantity: med.quantity - 1 }
          : med
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

import React, { useContext } from "react";
import MedContext from "./Store/Context";

const List = ({ medicines }) => {
  const { addToCart } = useContext(MedContext);

  const handleAddToCart = (med) => {
    if (med.quantity > 0) {
      addToCart(med); // Add item to cart
      med.quantity--; // Reduce the available quantity
    }
  };

  return (
    <div>
      <h2>Available Medicines</h2>
      {/* Table Headers */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          fontWeight: "bold",
          padding: "1rem 2rem",
          borderBottom: "2px solid #ccc",
        }}
      >
        <div style={{ flex: 1 }}>Name</div>
        <div style={{ flex: 2 }}>Description</div>
        <div style={{ flex: 1 }}>Price</div>
        <div style={{ flex: 1 }}>Quantity</div>
        <div style={{ flex: 1 }}>Action</div>
      </div>

      {/* Medicine List */}
      {medicines.map((med) => (
        <div
          key={med.id}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            padding: "0.5rem 2rem",
            borderBottom: "1px solid #ccc",
          }}
        >
          <div style={{ flex: 1 }}>{med.name}</div>
          <div style={{ flex: 2 }}>{med.description}</div>
          <div style={{ flex: 1 }}>{med.price}</div>
          <div style={{ flex: 1 }}>{med.quantity}</div>
          <div style={{ flex: 1 }}>
            <button
              disabled={med.quantity === 0} // Disable button when quantity is 0
              onClick={() => handleAddToCart(med)}
            >
              {med.quantity === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;

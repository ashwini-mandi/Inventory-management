import React, { useContext, useState } from "react";
import "./Form.css";
import MedContext from "./Store/Context";

const Form = ({ onAddMed }) => {
  const medCntxt = useContext(MedContext);
  const [formInputs, setFormInputs] = useState({
    medicineName: "",
    description: "",
    price: "",
    quantity: "",
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };
  const onAdd = (event) => {
    event.preventDefault();
    const newMedicine = {
      name: formInputs.medicineName,
      description: formInputs.description,
      price: +formInputs.price,
      quantity: +formInputs.quantity,
    };

    onAddMed(newMedicine);
    // console.log(medCntxt);
  };
  return (
    <>
      <div>
        <h1>Inventory Management</h1>
        <form className="form-container" onSubmit={onAdd}>
          <div className="form-group">
            <label htmlFor="medicine-name">Medicine Name</label>
            <input
              id="medicine-name"
              name="medicineName"
              value={formInputs.medicineName}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              value={formInputs.description}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              name="price"
              type="number"
              value={formInputs.price}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              value={formInputs.quantity}
              onChange={onChange}
            />
          </div>
          <button className="button">Add Product</button>
        </form>
      </div>
    </>
  );
};

export default Form;

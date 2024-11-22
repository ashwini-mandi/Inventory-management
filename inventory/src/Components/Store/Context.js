import { createContext } from "react";

const MedContext = createContext({
  medicines: [],
  addMedicines: (med) => {},
});

export default MedContext;

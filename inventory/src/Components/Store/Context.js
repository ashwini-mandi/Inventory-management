import { createContext } from "react";

const MedContext = createContext({
  medicines: [],
  addMedicines: (med) => {},
  removeMedicine: (med) => {},
});

export default MedContext;

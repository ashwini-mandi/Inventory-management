import List from "./MedicineList";
import Form from "./MedicineForm";
import { useContext } from "react";
import MedContext from "./Store/Context";

const Main = () => {
  const medCntx = useContext(MedContext);
  const onAddMed = (medicine) => {
    medCntx.addMedicines(medicine);
  };
  //   console.log(medCntx);
  return (
    <>
      <div>
        <Form onAddMed={onAddMed} />
        <List medicines={medCntx.medicines} />
      </div>
    </>
  );
};

export default Main;

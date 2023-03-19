import { useContext } from "react";
import { AppContext } from "../App";

const GrandChild = () => {
  const { setText } = useContext(AppContext);

  return (
    <>
      <button
        onClick={() => {
          setText("Pedro");
        }}
      >
        Click here
      </button>
    </>
  );
};

export default GrandChild;

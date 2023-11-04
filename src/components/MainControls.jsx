import { useContext } from "react";
import { SmartHomeContext } from "../SmartHomeContext";

export function MainControls() {
  const { dispatch } = useContext(SmartHomeContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: "allOff" })}>All Off</button>
      <button  onClick={() => dispatch({ type: "allOn" })}>All On</button>
    </div>
  );
}

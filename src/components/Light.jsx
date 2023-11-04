import { useContext } from "react";
import { SmartHomeContext } from "../SmartHomeContext";

export function Light(props) {
  const { id } = props;
  const { lights, dispatch } = useContext(SmartHomeContext);
  const isOn = lights[id]
  console.log(isOn)
  function handleOnToggle(){
    dispatch({type: 'toggle', payload: id})
  }
  return (
    <button
      data-testid={`light-${id}`}
      id={id}
      style={{
        border: "solid 1px gray",
        padding: "2rem",
        fontSize: "3rem",
        background: isOn ? "#eee" : "#444",
      }}
      onClick={handleOnToggle}
    >
      {isOn ? "💡" : "⚫️"}
    </button>
  );
}

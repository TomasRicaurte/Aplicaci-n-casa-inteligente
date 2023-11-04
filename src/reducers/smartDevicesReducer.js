export const smartDevicesReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        lights: state.lights.map((light, index) =>
          action.payload === index ? !light : light
        ),
      };
      break;
  }
  return state;
};

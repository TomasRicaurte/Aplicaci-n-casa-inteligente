export const smartDevicesReducer = (state, action) => {
  switch (action.type) {
    case "allOn":
      return {
        ...state,
        lights: state.lights.map(() => true),
      };
    case "allOff":
      return {
        ...state,
        lights: state.lights.map(() => false),
      };
    case "toggle":
      return {
        ...state,
        lights: state.lights.map((light, index) =>
          action.payload === index ? !light : light
        ),
      };
    default:
      return state;
  }
};

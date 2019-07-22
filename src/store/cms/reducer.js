const initialState = { timeLeftInSeconds: "", startBroadCast: false };
export const cms = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_TIME":
      return {
        ...state,
        timeLeftInSeconds: action.timeLeftInSeconds
      };
    case "STRAT_BROADCAST":
      return {
        ...state,
        startBroadCast: true
      };
    default:
      return state;
  }
};

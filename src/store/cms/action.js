import axios from "axios";

export const getTimeStamp = () => {
  return async dispatch => {
    let currentTime = Math.round(new Date().getTime() / 1000);
    let targetTime = 1563786824;
    let timeLeftInSeconds = targetTime - currentTime;
    let x = timeLeftInSeconds;

    let timer = setInterval(() => {
      x--;
      // console.log("x", x);
      if (x < 2060) {
        console.log("fire ")
        dispatch({ type: "STRAT_BROADCAST" });
        clearInterval(timer);
      }
    }, 1000);

    dispatch({ type: "STORE_TIME", timeLeftInSeconds });
  };
};


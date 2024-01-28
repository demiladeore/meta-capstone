import { useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../utils/api";

const updateTimes = (state, action) => {
  if (action.type === "SET_TIMES") {
    return state;
  }
};

function Main() {
  const [state, dispatch] = useReducer(updateTimes, []);
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    fetchAPI(today).then((times) => {
      dispatch({ type: "SET_TIMES", times });
    });
  });
  return (
    <BookingForm
      availableTimes={state}
      dispatch={dispatch}
      fetchAPI={fetchAPI}
    />
  );
}

export default Main;

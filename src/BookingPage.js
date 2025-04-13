import Header from "./Header";
import BookingForm from "./BookingForm";
import { useReducer,useEffect } from "react";
import { fetchAPI } from './api'

const timesReducer = (state, action) => {
    switch (action.type) {
      case "INITIALIZE_TIMES":
        return action.payload;
      case "UPDATE_TIMES":
        return action.payload;
      default:
        return state;
    }
  };



function BookingPage(){

    const [availableTimes, dispatch] = useReducer(timesReducer, []);

  useEffect(() => {
    document.title = 'Reservations';
    const today = new Date();
    fetchAPI(today).then(times => {
      dispatch({ type: "INITIALIZE_TIMES", payload: times });
    });
  }, []);

  const updateTimes = (selectedDate) => {
    fetchAPI(new Date(selectedDate)).then(times => {
      dispatch({ type: "UPDATE_TIMES", payload: times });
    });
  };

    return(
        <>
        <Header/>
        <BookingForm
            availableTimes={availableTimes}
            updateTimes={updateTimes}
        />
        </>
    )
}


export default BookingPage;
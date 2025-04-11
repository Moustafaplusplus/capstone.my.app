import Header from "./Header";
import BookingForm from "./BookingForm";
import { useReducer,useEffect } from "react";


const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };


const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return initializeTimes();
        default:
            return state;
    }
};

function BookingPage(){

    useEffect(() => {
        document.title = 'Reservations';
      }, []);

    const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);


    const updateTimes = (selectedDate) => {
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
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
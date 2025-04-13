import bookingform from './bookingform.css'
import { useState } from 'react';
import { submitAPI } from './api'
import { useNavigate } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';

function BookingForm({availableTimes,updateTimes}){

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const navigate = useNavigate();
    const today = new Date().toISOString().split("T")[0];

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        updateTimes(selectedDate);
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!date || !time || !guests || !occasion) {
          alert("Please fill out all fields.");
          return;
        }
      
        const formData = { date, time, guests, occasion };
      
        const response = await submitAPI(formData); // simulate API submission
      
        if (response) {
          setFormSubmitted(true);
          // Reset fields
          setDate('');
          setTime('');
          setGuests(1);
          setOccasion('');
          navigate('/confirmation', {
            state: {
              date,
              time,
              guests,
              occasion
            }
          });
        } else {
          alert("Something went wrong. Please try again.");
        }
      };


    return(
        <>
            <h1 className="bookingheader">Book a Table</h1>
            {formSubmitted && (
        <p className="success-message">🎉 Your reservation has been submitted successfully!</p>
      )}
            <form >
                <label htmlFor="res-date">Choose date</label>
                <input type="date"  min={today} onChange={handleDateChange} id="res-date" value={date} required/>

                <label htmlFor="res-time">Choose time</label>
                    <select id="res-time " value={time} onChange={(e)=>{setTime(e.target.value)}} required>
                    <option disabled value="">Select Time</option>
                    {availableTimes.map((t, index)=>(<option key={index} value={t}>{t}</option>))}
                    </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" value={guests} placeholder="1" min="1" max="10" id="guests"
                onChange={(e)=>{setGuests(e.target.value)}} required/>

                <label htmlFor="occasion">Occasion</label>
                <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        required
                        >
                        <option value="" disabled>Select Occasion</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Party">Party</option>
                        <option value="Baby Shower">Baby Shower</option>
                </select>

                <input type="submit" value="Make Your reservation" onClick={handleSubmit}/>
            </form>
        </>
    )
}

export default BookingForm
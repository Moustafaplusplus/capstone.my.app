import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './confirmedbooking.css';

function ConfirmedBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state;

  return (
    <div className="confirmation-container">
      <h1>🎉 Booking Confirmed!</h1>
      <h2>Here are your reservation details:</h2>
      
      {bookingDetails ? (
        <>
          <p><strong>Date:</strong> {bookingDetails.date}</p>
          <p><strong>Time:</strong> {bookingDetails.time}</p>
          <p><strong>Guests:</strong> {bookingDetails.guests}</p>
          <p><strong>Occasion:</strong> {bookingDetails.occasion}</p>
        </>
      ) : (
        <p>No booking details found.</p>
      )}

      <div className="confirmation-buttons">
        <button onClick={() => navigate('/')}>Go to Home</button>
        <button onClick={() => navigate('/reservations')}>Make Another Reservation</button>
      </div>
    </div>
  );
}

export default ConfirmedBooking;

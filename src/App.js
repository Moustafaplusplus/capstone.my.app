import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/reservations" element={<BookingPage />} />
      <Route path="/confirmation" element={<ConfirmedBooking />} />
    </Routes>
  );
}

export default App;
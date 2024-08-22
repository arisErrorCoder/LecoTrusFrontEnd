// src/pages/BookAppointment.jsx
import React from 'react';

const BookAppointment = () => {
  return (
    <div className="book-video-call">
      <h1>Book a Appoinment</h1>
      <p>please provide your details below Our Team Will Contact Within 2-3hrs:</p>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Whatsapp No:</label>
        <input type="number" name="number" />
        <label>Preferred Date and Time:</label>
        <input type="datetime-local" name="datetime" />
        <button type="submit">Book a Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;

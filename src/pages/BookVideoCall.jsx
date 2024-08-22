// src/pages/BookVideoCall.jsx
import React from 'react';
import "./BookVideoCall.css"
const BookVideoCall = () => {
  return (
    <div className="book-video-call">
      <h1>Book a Video Call</h1>
      <p>To schedule a video call, please provide your details below Our Team Will Contact Within 2-3hrs:</p>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Whatsapp No:</label>
        <input type="number" name="number" />
        <label>Preferred Date and Time:</label>
        <input type="datetime-local" name="datetime" />
        <button type="submit">Schedule Call</button>
      </form>
    </div>
  );
};

export default BookVideoCall;

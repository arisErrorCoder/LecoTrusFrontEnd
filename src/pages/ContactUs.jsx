import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

const InquiryPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('general');
  const [service, setService] = useState('virtual');
  const [contactMethod, setContactMethod] = useState('call');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const templateParams = {
      name,
      email,
      message,
      subject,
      service,
      contactMethod,
    };

    try {
      await emailjs.send(
        'service_ep9ujp6', // Replace with your EmailJS service ID
        'template_k02dblj', // Replace with your EmailJS template ID
        templateParams,
        'M6cR_XUIa6DWDj_8_' // Replace with your EmailJS user ID
      );
      setStatus('Your inquiry has been sent!');
      setName('');
      setEmail('');
      setMessage('');
      setSubject('general');
      setService('virtual');
      setContactMethod('call');
    } catch (error) {
      console.error('Failed to send your inquiry:', error);
      setStatus('Failed to send your inquiry.');
    }
  };

  return (
    <div className="inquiry-container">
      <h1>Inquiry Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Subject:
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="general"
                checked={subject === 'general'}
                onChange={(e) => setSubject(e.target.value)}
              />
              General Inquiry
            </label>
            <label>
              <input
                type="radio"
                value="feedback"
                checked={subject === 'feedback'}
                onChange={(e) => setSubject(e.target.value)}
              />
              Feedback
            </label>
          </div>
        </label>
        <label>
          Select Service:
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="virtual">Virtual Appointment</option>
            <option value="instore">In-store Appointment</option>
          </select>
        </label>
        <label>
          Preferred Contact Method:
          <select
            value={contactMethod}
            onChange={(e) => setContactMethod(e.target.value)}
            required
          >
            <option value="call">Call</option>
            <option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button type="submit">Send Inquiry</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default InquiryPage;

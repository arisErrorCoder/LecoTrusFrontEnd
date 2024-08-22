// src/pages/WriteToUs.jsx
import React from 'react';

const WriteToUs = () => {
  return (
    <div className="write-to-us" style={styles.container}>
      <h1 style={styles.heading}>Write to Us</h1>
      <p style={styles.paragraph}>
        If you have any questions or feedback, feel free to contact us at any of the emails below:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          For Order & feedback: <a href="mailto:support@lecotrus.com" style={styles.link}>support@lecotrus.com</a>
        </li>
        <li style={styles.listItem}>
        For Career Enquires: <a href="mailto:job@lecotrus.com" style={styles.link}>job@lecotrus.com</a>
        </li>
        <li style={styles.listItem}>
        For Client Appoinments: <a href="mailto:client@lecotrus.com" style={styles.link}>client@lecotrus.com</a>
        </li>
        <li style={styles.listItem}>
        Corporate Id: <a href="mailto:client@lecotrus.com" style={styles.link}>admin@lecotrus.com</a>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '10% auto',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
    fontSize: '24px',
  },
  paragraph: {
    textAlign: 'center',
    color: '#666',
    marginBottom: '20px',
    fontSize: '16px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
    fontSize: '16px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default WriteToUs;

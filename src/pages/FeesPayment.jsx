import React from 'react';

const FeesPayment = () => {
  const styles = {
    container: {
      marginTop:'150px',
      width: '80%',
      margin: '20px auto',
      backgroundColor: '#fff',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading1: {
      fontSize: '32px',
      marginBottom: '20px',
      color: '#000',
    },
    heading2: {
      fontSize: '24px',
      marginTop: '20px',
      marginBottom: '10px',
      color: '#333',
    },
    paragraph: {
      marginBottom: '15px',
    },
    list: {
      paddingLeft: '20px',
    },
    listItem: {
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading1}>Cookies Policy</h1>
      <p style={styles.paragraph}>Effective Date: [Date]</p>

      <h2 style={styles.heading2}>1. Introduction</h2>
      <p style={styles.paragraph}>
        At [Your E-commerce Website], we use cookies and similar tracking technologies to enhance your shopping experience. This Cookies Policy explains what cookies are, how we use them, and how you can manage them.
      </p>

      <h2 style={styles.heading2}>2. What Are Cookies?</h2>
      <p style={styles.paragraph}>
        Cookies are small text files placed on your device that help us remember your preferences and improve your experience on our website. Cookies can be session-based (expire when you close your browser) or persistent (remain on your device for a set period).
      </p>

      <h2 style={styles.heading2}>3. How We Use Cookies</h2>
      <p style={styles.paragraph}>We use cookies for the following purposes:</p>
      <ul style={styles.list}>
        <li style={styles.listItem}>Essential Cookies: To ensure the functionality of our website and enable essential features like shopping carts and secure transactions.</li>
        <li style={styles.listItem}>Performance Cookies: To analyze how you use our website and help us improve its performance.</li>
        <li style={styles.listItem}>Functionality Cookies: To remember your preferences and settings for a more personalized experience.</li>
        <li style={styles.listItem}>Targeting Cookies: To deliver relevant advertisements and promotions based on your browsing behavior.</li>
      </ul>

      <h2 style={styles.heading2}>4. Managing Cookies</h2>
      <p style={styles.paragraph}>
        You can manage cookies through your browser settings. You can choose to block or delete cookies, but this may affect your ability to use some features of our website.
      </p>

      <h2 style={styles.heading2}>5. Third-Party Cookies</h2>
      <p style={styles.paragraph}>
        We may use third-party services that place cookies on your device for analytics, advertising, and other purposes. These cookies are subject to the respective third-party’s privacy policy.
      </p>

      <h2 style={styles.heading2}>6. Changes to This Cookies Policy</h2>
      <p style={styles.paragraph}>
        We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated effective date.
      </p>

      <h2 style={styles.heading2}>7. Contact Us</h2>
      <p style={styles.paragraph}>
        If you have any questions about our Cookies Policy, please contact us at [contact@yourecommercewebsite.com].
      </p>
    </div>
  );
};

export default FeesPayment;

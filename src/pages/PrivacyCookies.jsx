import React from 'react';

const PrivacyPolicy = () => {
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
      <h1 style={styles.heading1}>Privacy Policy</h1>
      <p style={styles.paragraph}>Effective Date: [Date]</p>

      <h2 style={styles.heading2}>1. Introduction</h2>
      <p style={styles.paragraph}>
        Welcome to Lecotraus. We are dedicated to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and shop for bridal and groom customized dresses, western wear, and party wear.
      </p>

      <h2 style={styles.heading2}>2. Information We Collect</h2>
      <p style={styles.paragraph}>
        <strong>Personal Information:</strong> We collect personal details such as your name, email address, phone number, shipping address, and payment information when you place an order or create an account.
      </p>
      <p style={styles.paragraph}>
        <strong>Order Information:</strong> We gather details about your purchases, including product choices and transaction history.
      </p>
      <p style={styles.paragraph}>
        <strong>Usage Data:</strong> We collect data on how you interact with our website, including your IP address, browser type, pages visited, and the time spent on our site.
      </p>

      <h2 style={styles.heading2}>3. How We Use Your Information</h2>
      <p style={styles.paragraph}>We use your information to:</p>
      <ul style={styles.list}>
        <li style={styles.listItem}>Process and fulfill your orders, including shipping and billing.</li>
        <li style={styles.listItem}>Communicate with you about your orders, including confirmations and updates.</li>
        <li style={styles.listItem}>Improve our website and services based on your feedback and usage patterns.</li>
        <li style={styles.listItem}>Send promotional materials and updates about our products and special offers (you can opt-out at any time).</li>
      </ul>

      <h2 style={styles.heading2}>4. Sharing Your Information</h2>
      <p style={styles.paragraph}>
        We do not sell or rent your personal information to third parties. We may share your information with:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>Service Providers: Third-party companies that assist us in processing payments, shipping orders, and providing customer support.</li>
        <li style={styles.listItem}>Legal Requirements: If required by law or to protect our rights and safety, we may disclose your information to authorities.</li>
      </ul>

      <h2 style={styles.heading2}>5. Security</h2>
      <p style={styles.paragraph}>
        We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2 style={styles.heading2}>6. Your Choices</h2>
      <p style={styles.paragraph}>
        You can access, correct, or delete your personal information through your account settings. You may also opt-out of receiving marketing communications by following the unsubscribe instructions in our emails.
      </p>

      <h2 style={styles.heading2}>7. Changes to This Privacy Policy</h2>
      <p style={styles.paragraph}>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
      </p>

      <h2 style={styles.heading2}>8. Contact Us</h2>
      <p style={styles.paragraph}>
        If you have any questions or concerns about this Privacy Policy, please contact us at [contact@yourecommercewebsite.com].
      </p>
    </div>
  );
};

export default PrivacyPolicy;
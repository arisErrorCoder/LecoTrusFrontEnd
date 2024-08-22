import React from 'react';

const TermsConditions = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms and Conditions</h1>
      <p><strong>Effective Date:</strong> [Date]</p>

      <h2 style={styles.subheading}>1. Introduction</h2>
      <p style={styles.paragraph}>
        Welcome to [Your E-commerce Website]. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and Conditions.
      </p>

      <h2 style={styles.subheading}>2. Use of Our Website</h2>
      <p style={styles.paragraph}>
        You agree to use our website in accordance with applicable laws and regulations. You must not use our website for any unlawful or prohibited purposes.
      </p>

      <h2 style={styles.subheading}>3. Intellectual Property</h2>
      <p style={styles.paragraph}>
        All content on our website, including text, graphics, logos, and images, is the property of [Your E-commerce Website] or its content suppliers and is protected by intellectual property laws.
      </p>

      <h2 style={styles.subheading}>4. User Accounts</h2>
      <p style={styles.paragraph}>
        If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
      </p>

      <h2 style={styles.subheading}>5. Orders and Payments</h2>
      <p style={styles.paragraph}>
        All orders placed on our website are subject to acceptance and availability. Prices are subject to change without notice. Payment must be made at the time of placing the order.
      </p>

      <h2 style={styles.subheading}>6. Shipping and Delivery</h2>
      <p style={styles.paragraph}>
        We aim to deliver your orders within the estimated time frame provided at checkout. However, delivery times are not guaranteed and may be affected by factors beyond our control.
      </p>

      <h2 style={styles.subheading}>7. Returns and Refunds</h2>
      <p style={styles.paragraph}>
        If you are not satisfied with your purchase, you may return the item(s) in accordance with our return policy. Refunds will be processed once the returned item(s) have been received and inspected.
      </p>

      <h2 style={styles.subheading}>8. Limitation of Liability</h2>
      <p style={styles.paragraph}>
        [Your E-commerce Website] shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or services.
      </p>

      <h2 style={styles.subheading}>9. Changes to These Terms</h2>
      <p style={styles.paragraph}>
        We may update these Terms and Conditions from time to time. Any changes will be posted on this page with an updated effective date.
      </p>

      <h2 style={styles.subheading}>10. Contact Us</h2>
      <p style={styles.paragraph}>
        If you have any questions or concerns about these Terms and Conditions, please contact us at [contact@yourecommercewebsite.com].
      </p>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    marginTop:'150px',
    width: '80%',
    margin: '20px auto',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '20px',
    color: '#555',
    marginTop: '20px',
  },
  paragraph: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '10px',
  }
};

export default TermsConditions;

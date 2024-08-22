import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import noProductsImage from '../assets/no-products.png'; // Adjust the path if necessary

const Empty = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/newin');
    }, 3000); // Redirects after 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        marginTop: '150px', // Ensures top margin across all pages
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <img
        src={noProductsImage}
        alt="No Products"
        style={{ width: '300px', marginBottom: '20px' }}
      />
      <p style={{ fontSize: '18px', color: '#555' }}>
        No products available. Redirecting to the New In section...
      </p>
    </div>
  );
};

export default Empty;

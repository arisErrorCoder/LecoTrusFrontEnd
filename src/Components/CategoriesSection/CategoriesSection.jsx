import React from 'react';
import './CategoriesSection.css'; // Import CSS for styling
import product1Image from '../../assets/Category/Lecotrus catagories-01.png'
import product2Image from '../../assets/Category/Lecotrus catagories-02.png';
import product3Image from '../../assets/Category/Lecotrus catagories-03.png';
import product4Image from '../../assets/Category/Lecotrus catagories-04.png';

const CategoriesSection = () => {
  // Example array of product data (replace with your data)
  const products = [
    { id: 1, name: '  Frock Set', imageUrl: product1Image },
    { id: 2, name: 'Kids Wear', imageUrl: product2Image },
    { id: 3, name: 'Sherwani Set', imageUrl: product3Image },
    { id: 4, name: 'Lehanga Set', imageUrl: product4Image }
  ];

  return (
    <div className="categories-section">
      <h1>CATEGORIES</h1>
      <h5>A blend of classic silhouettes and our signature shine, embodied by enigmatic sequins.</h5>
      <div className="product-gridd">
        {products.map(product => (
          <div key={product.id} className="product-itemm">
            <div className="product-imagee">
                <p>{product.name}</p>
              <img
                src={product.imageUrl}
                alt={product.name}
              />
              <div className="overlay">
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
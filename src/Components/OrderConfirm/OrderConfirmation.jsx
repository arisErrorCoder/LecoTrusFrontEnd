// OrderConfirmation.jsx
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './OrderConfirmation.css';

// const OrderConfirmation = () => {
//   const { state } = useLocation();
//   const { items, total } = state || { items: [], total: 0 };

//   return (
//     <div className="order-confirmation">
//       <h1>Order Placed Successfully</h1>
//       <p>Thank you for your purchase! Your order details are as follows:</p>
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.id} className="order-item">
//             <div className="product-count">{index + 1}</div>
//             {/* Display product image if available */}
//             {/* <img src={`http://localhost:4000/images/${item.images[0]}`} alt={item.name} /> */}
//             <div>
//               <p>{item.name}</p>
//               <p>Size: {item.size}</p>
//               <p>Quantity: {item.quantity}</p>
//               <p>Price: ₹{item.price}</p>
//               <p>Total Price: ₹{total}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <div className="summary-totals">
//         <p>Total: ₹{total}</p>
//       </div>
//       <div className="shipment-status">
//         <h2>Shipment Status</h2>
//         <p>Your order is being processed and will be shipped soon.</p>
//       </div>
//     </div>
//   );
// };

// export default OrderConfirmation;


import React from 'react';
import './OrderConfirmation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
    const userName = '[User\'s Name]'; // Replace with actual user's name
    const orderNumber = '12345'; // Replace with actual order number
    const { state } = useLocation();
    const { items = [], total = 0 } = state || {};

    return (
        <div className="confirmation-background">
            <div className="confirmation-container">
                <div className="confirmation-content">
                    {/* Animated Checkmark */}
                    <div className="checkmark">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    {/* Thank You Message */}
                    <h1 className="thank-you">Thank you for your order, {userName}!</h1>
                    <p className="order-number">Your order #<strong>{orderNumber}</strong> has been placed successfully.</p>

                    {/* Animated Confetti */}
                    <div className="confetti"></div>

                    {/* Order Summary */}
                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <div className="order-items">
                            {items.length > 0 ? (
                                items.map((item, index) => (
                                    <div className="item" key={index}>
                                       {/* <img src={`http://localhost:4000/images/${item.images[1]}`} alt={item.name} /> */}
                                        <div className="details">
                                            <p className="name">{item.name}</p>
                                            <p className="quantity">Quantity: {item.quantity}</p>
                                            <p className="price">${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No items in your order.</p>
                            )}
                        </div>
                        <div className="total">
                            <p>Total: <strong>${total.toFixed(2)}</strong></p>
                        </div>
                    </div>

                    {/* Personal Message */}
                    <p className="personal-message">Your stylish picks will be on their way soon! Get ready to turn heads.</p>

                    {/* Next Steps */}
                    <div className="next-steps">
                    <Link to="/my-orders" ><button className="track-order-btn">Track Your Order</button></Link>
                        <button className="continue-shopping-btn">Continue Shopping</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;

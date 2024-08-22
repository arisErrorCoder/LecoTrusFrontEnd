// PaymentPage.jsx
import React, { useState, useContext } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StoreContext } from '../Store/StoreContext';
import './PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate();
  const { cart, subtotal, total, clearCart, user ,url} = useContext(StoreContext);
  const [paymentData, setPaymentData] = useState({
    paymentMode: 'Bank Transfer',
    transactionId: '',
    paymentScreenshot: null,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [agreed, setAgreed] = useState(false);
  const { state } = useLocation();
  const { cart: locationCart = [], customerData = {} } = state || {};
  const items = locationCart.length > 0 ? locationCart : cart;

  const validate = () => {
    const newErrors = {};
    if (!paymentData.transactionId) newErrors.transactionId = 'Transaction ID is required';
    if (!paymentData.paymentScreenshot) newErrors.paymentScreenshot = 'Payment screenshot is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPaymentData((prevData) => ({ ...prevData, paymentScreenshot: file }));
  };

  const handleAgree = () => {
    setAgreed(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      const paymentDetails = paymentData.paymentMode === 'Bank Transfer'
        ? {
            bankDetails: {
              bankName: 'XYZ Bank', 
              accountNumber: '1234567890', 
              ifscCode: 'XYZ123' 
            }
          }
        : paymentData.paymentMode === 'UPI'
        ? { upiId: 'example@upi' } 
        : {};

      const orderData = {
        userId: user,
        items: cart.map(item => ({
          productId: item.productId._id || item._id, // Ensure that the correct product ID is being referenced
          quantity: item.quantity,
          size: item.size,
          name: item.productId.name,
          price: item.productId.price
        })),
        subtotal,
        total,
        shippingDetails: {
          address: customerData.address,
          city: customerData.city,
          state: customerData.state,
          zipCode: customerData.pincode,
          country: customerData.country,
        },
        paymentMethod: paymentData.paymentMode,
        paymentDetails,
      };

      try {
        const response = await axios.post(`${url}/api/orders/create`, orderData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        toast.success("Order placed successfully!");
        clearCart(); // Clear the cart after successful payment
        navigate('/order-confirmation', { state: { items: orderData.items, total } }); // Pass items and total to confirmation page
      } catch (error) {
        console.error('Order submission error:', error);
        toast.error("An error occurred while placing the order.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="payment-page">
      <header className="payment-header">
        <h1>LECOTRUS</h1>
        <nav1>
          <Link to="/cart">Cart</Link> &gt; <Link to="/checkout">Checkout</Link> &gt; <span>Payment</span>
        </nav1>
      </header>
      <div className="payment-content">
        <div className="payment-main">
          <div className="payment-note">
            <h2>Payment Details</h2>
            <p>To complete your purchase, please follow the payment instructions below:</p>
            <ul>
              <li>Select your preferred payment method from the dropdown.</li>
              <li>Enter the transaction ID provided by your payment provider.</li>
              <li>Upload a screenshot of your payment confirmation.</li>
            </ul>
            <button className="agree-button" onClick={handleAgree}>I Agree</button>
          </div>
          {agreed && (
            <div className="payment-form">
              <h2>Payment Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Mode of Payment</label>
                    <select
                      name="paymentMode"
                      value={paymentData.paymentMode}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Bank Transfer">Bank Transfer</option>
                      <option value="UPI">UPI</option>
                      <option value="G-pay">G-pay</option>
                    </select>
                  </div>
                </div>

                {paymentData.paymentMode === 'Bank Transfer' && (
                  <div className="payment-details">
                    <h3>Bank Transfer Details</h3>
                    <p>Please transfer the amount to the following bank details:</p>
                    <p>Bank Name: XYZ Bank</p>
                    <p>Account Number: 1234567890</p>
                    <p>IFSC Code: XYZ123</p>
                    <p>Account Holder: John Doe</p>
                  </div>
                )}

                {paymentData.paymentMode === 'UPI' && (
                  <div className="payment-details">
                    <h3>UPI Payment Details</h3>
                    <p>Make the payment using the following UPI ID:</p>
                    <p>UPI ID: example@upi</p>
                  </div>
                )}

                <div className="form-group">
                  <label>Transaction ID</label>
                  <input
                    type="text"
                    name="transactionId"
                    value={paymentData.transactionId}
                    onChange={handleInputChange}
                    placeholder="Enter your transaction ID"
                    required
                  />
                  {errors.transactionId && <p className="error">{errors.transactionId}</p>}
                </div>

                <div className="form-group">
                  <label>Payment Screenshot</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                  {errors.paymentScreenshot && <p className="error">{errors.paymentScreenshot}</p>}
                </div>

                <button type="submit" disabled={loading}>
                  {loading ? 'Processing...' : 'Submit Payment'}
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="payment-summary">
          <h2>Payment Summary</h2>
          <ul>
            {items.map((item, index) => (
              <li key={item.productId} className="payment-item">
                <div className="product-count">{index + 1}</div>
                {/* Uncomment if images are needed */}
                <img src={`${url}/images/${item.productId.images[0]}`} alt={item.productId.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Size: {item.size}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="payment-totals">
            <p>Subtotal: ₹{subtotal}</p>
            <p>Total: ₹{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

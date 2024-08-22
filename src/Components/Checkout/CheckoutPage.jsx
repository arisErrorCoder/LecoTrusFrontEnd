import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CheckoutPage.css';
import { StoreContext } from '../Store/StoreContext';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, total, subtotal } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    customer: {
      firstName: '',
      lastName: '',
      address: '',
      pincode: '',
      country: 'USA',
      state: '',
      city: '',
      phone: '',
      email: '',
    }
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const { customer } = formData;

    if (!customer.firstName) newErrors['customer.firstName'] = 'First name is required';
    if (!customer.lastName) newErrors['customer.lastName'] = 'Last name is required';
    if (!customer.address) newErrors['customer.address'] = 'Address is required';
    if (!customer.pincode) newErrors['customer.pincode'] = 'Pincode is required';
    if (!customer.state) newErrors['customer.state'] = 'State is required';
    if (!customer.city) newErrors['customer.city'] = 'City is required';
    if (!customer.phone) newErrors['customer.phone'] = 'Phone number is required';
    if (!customer.email) newErrors['customer.email'] = 'Email is required';

    if (customer.phone && !/^\d{10}$/.test(customer.phone)) {
      newErrors['customer.phone'] = 'Phone number must be 10 digits';
    }
    if (customer.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(customer.email)) {
      newErrors['customer.email'] = 'Invalid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const [key, subKey] = name.split('.');
    setFormData((prevData) => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        [subKey]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/payment', {
        state: { cart, customerData: formData.customer }
      });
    }
  };

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <h1>LECOTRUS</h1>
        <nav1>
          <Link to="/cart">Cart</Link> &gt; <span>Checkout</span> &gt; <Link to="/payment">Payment</Link>
        </nav1>
      </header>
      <div className="checkout-content">
        <div className="checkout-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="customer.firstName"
                  value={formData.customer.firstName}
                  onChange={handleInputChange}
                  required
                />
                {errors['customer.firstName'] && <span className="error">{errors['customer.firstName']}</span>}
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="customer.lastName"
                  value={formData.customer.lastName}
                  onChange={handleInputChange}
                  required
                />
                {errors['customer.lastName'] && <span className="error">{errors['customer.lastName']}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="customer.address"
                  value={formData.customer.address}
                  onChange={handleInputChange}
                  required
                />
                {errors['customer.address'] && <span className="error">{errors['customer.address']}</span>}
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input
                  type="text"
                  name="customer.pincode"
                  value={formData.customer.pincode}
                  onChange={handleInputChange}
                  required
                />
                {errors['customer.pincode'] && <span className="error">{errors['customer.pincode']}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Country</label>
                <select
                  name="customer.country"
                  value={formData.customer.country}
                  onChange={handleInputChange}
                  required
                >
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="India">India</option>
                </select>
              </div>
              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  name="customer.state"
                  value={formData.customer.state}
                  onChange={handleInputChange}
                  required
                />
                {errors['customer.state'] && <span className="error">{errors['customer.state']}</span>}
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="customer.city"
                  value={formData.customer.city}
                  onChange={handleInputChange}
                  required
                />
                {errors['customer.city'] && <span className="error">{errors['customer.city']}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="customer.phone"
                  value={formData.customer.phone}
                  onChange={handleInputChange}
                  required
                />
                {errors['customer.phone'] && <span className="error">{errors['customer.phone']}</span>}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="customer.email"
                  value={formData.customer.email}
                  onChange={handleInputChange}
                  required
                />
                {errors['customer.email'] && <span className="error">{errors['customer.email']}</span>}
              </div>
            </div>
            <button type="submit" className="continue-button">Continue to Shipping</button>
          </form>
        </div>
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={item._id} className="checkout-item">
                {/* Assuming the image URL is correctly handled */}
                <img src={`http://localhost:4000/images/${item.productId.images[0]}`} alt={item.productId.name} />
                <div>
                  <p>{item.productId.name}</p>
                  <p>Size: {item.size}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.productId.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="summary-totals">
          <p>Subtotal: ₹{subtotal}</p>
          <p>Total: ₹{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

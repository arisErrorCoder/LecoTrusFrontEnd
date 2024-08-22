import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';
import { StoreContext } from '../Store/StoreContext';

const CartPage = () => {
  const { cart, removeFromCart, updateItemQuantity, url, subtotal, setSubtotal, total, setTotal } = useContext(StoreContext);
  const navigate = useNavigate();

  // Calculate subtotal and total when the cart changes
  useEffect(() => {
    const newSubtotal = cart.reduce((acc, item) => {
      const product = item.productId;
      return acc + (product.price * item.quantity);
    }, 0);

    setSubtotal(newSubtotal);
    setTotal(newSubtotal); // Assuming total is the same as subtotal for now
  }, [cart, setSubtotal, setTotal]);

  const handleProceedToCheckout = () => {
    navigate('/CheckoutPage');
  };

  useEffect(() => {
    console.log(removeFromCart);
  }, [removeFromCart]);

  return (
    <div className="cart-page">
      <h1 style={{ textAlign: 'center' }}>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
        </div>
      ) : (
        <div className="combine-div">
          <div className="cart-items">
            {cart.map((item) => {
              const product = item.productId; // Get the product details

              return (
                <div key={item._id} className="cart-item">
                  {/* Handle the image source carefully based on product details */}
                  <img src={`${url}/images/${(product.images && product.images[0]) || 'default-image.jpg'}`} alt={product.name} />
                  <div className="cart-item-details">
                    <h2>{product.name}</h2>
                    <p>Description: {product.description}</p>
                    <p>Price: ₹{product.price}</p>
                    <p>Color: {product.color}</p>
                    <p>Size: {item.size}</p>
                    <p>Category: {product.category}</p>
                    <div className="quantity-controls">
                      <button onClick={() => updateItemQuantity(item.id || product._id, item.size, item.quantity - 1)}>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span>{item.quantity || 0}</span>
                      <button onClick={() => updateItemQuantity(item.id || product._id, item.size, item.quantity + 1)}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <button className="remove-button" onClick={() => removeFromCart(item.id || product._id, item.size)}>
                      <FontAwesomeIcon icon={faTrashAlt} /> Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-summary">
            <h2>Summary</h2>
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>Total: ₹{total.toFixed(2)}</p>
            <button className="checkout-button" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

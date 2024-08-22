import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './MyOrders.css';
import { StoreContext } from '../Store/StoreContext';

const MyOrders = () => {
  const { user,url } = useContext(StoreContext);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${url}/api/orders/${user}`);
        setOrders(response.data); // Ensure your API response includes product details
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  // Calculate the indexes for the current page orders
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Calculate total pages
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  // Handle pagination
  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1 className="page-title">My Orders</h1>

      {/* Order Filter Section */}
      {/* <div className="order-filter">
        <select className="filter-select">
          <option value="all">All Orders</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div> */}

      {/* Order Cards */}
      {currentOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        currentOrders.map(order => (
          <div key={order._id} className="order-card">
            <div className="order-header">
              <h2>Order #{order._id}</h2>
              <span className="order-date">Placed on: {new Date(order.orderDate).toLocaleDateString()}</span>
            </div>
            <div className="order-body">
              {order.items.map(item => {
                const productDetails = item.productDetails || {};
                return (
                  <div key={item.productId} className="product">
                    <img
                      src={`${url}/images/${item.productId.images[0]}`} alt={item.productId.name}
                      // alt={productDetails.name || 'Product Image'}
                      className="product-image"
                    />
                    <div className="product-details">
                      <h3 className="product-name">{item.productId.name}</h3>
                      <p className="product-quantity">Quantity: {item.quantity}</p>
                      <p className="product-price">Price: ${item.productId.price || '0'}</p>
                      <p className="product-size">Size: {item.size}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="order-footer">
              <div className="shipping-progress">
                <span>Status: {order.status}</span>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${order.status === 'Shipped' ? 100 : 0}%` }}
                  ></div>
                </div>
              </div>
              <p className="total-price">Total: ₹{order.total}</p>
              <button className="track-order-btn">Track Order</button>
              <button className="view-details-btn">View Details</button>
            </div>
          </div>
        ))
      )}

      {/* Pagination */}
      {orders.length > ordersPerPage && (
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            className={`page-link ${currentPage === 1 ? 'disabled' : ''}`}
            disabled={currentPage === 1}
          >
            &laquo; Previous
          </button>
          {[...Array(totalPages).keys()].map(number => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`page-link ${currentPage === number + 1 ? 'active' : ''}`}
            >
              {number + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            className={`page-link ${currentPage === totalPages ? 'disabled' : ''}`}
            disabled={currentPage === totalPages}
          >
            Next &raquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default MyOrders;

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const url = "https://lecotruss.onrender.com";
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(localStorage.getItem("userId") || null);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${url}/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        try {
          const response = await axios.get(`${url}/api/cart/${user}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setCart(response.data.items);
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      }
    };
    fetchCart();
  }, [user, cart]);

  // useEffect(() => {
  //   const calculateTotals = () => {
  //     const newSubtotal = cart.reduce((acc, item) => {
  //       return acc + (item.product.price * item.quantity);
  //     }, 0);
  //     setSubtotal(newSubtotal);
  //     setTotal(newSubtotal); // Assuming total is the same as subtotal for now
  //   };

  //   calculateTotals();
  // }, [cart]);

  const addToCart = async (product, quantity = 1, size = '') => {
    const existingProduct = cart.find(item => item._id === product._id && item.size === size);

    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map(item =>
        item.product._id === product._id && item.size === size
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [...cart, { product, quantity, size }];
    }

    setCart(updatedCart);

    try {
      await axios.post(`${url}/api/cart/add`, {
        userId: user,
        productId: product._id,
        quantity,
        size
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const removeFromCart = async (productId, size) => {
    try {
      const response = await axios.delete(`${url}/api/cart/remove/${user}/${productId}/${size}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCart(response.data.items);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const updateItemQuantity = async (productId, size, quantity) => {
    if (quantity < 1) return;

    try {
      await axios.put(`${url}/api/cart/${user}`, {
        productId,
        size,
        quantity
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      refreshCart(); // Implement this if needed
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    subtotal,
    total,
    products,
    setProducts,
    user,
    setUser,
    token,
    setToken,
    wishlist,
    setWishlist,
    url,
    clearCart, subtotal, setSubtotal, total, setTotal
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

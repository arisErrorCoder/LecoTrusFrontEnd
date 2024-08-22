import React, { useContext, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import './Login.css';
import axios from "axios";
import { StoreContext } from '../Store/StoreContext';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Login = ({ setShowLogin }) => {
  const { url, setToken, setUser } = useContext(StoreContext);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [isLogin, setIsLogin] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const endpoint = isLogin ? "/api/users/login" : "/api/users/register";
    try {
      console.log("Sending data:", formData);
      const response = await axios.post(`${url}${endpoint}`, formData);
      const { token, userId, message, error } = response.data;
  
      if (token) {
        setToken(token);
        localStorage.setItem("token", token);
        toast.success("Login successful!");
        if (userId) {
          setUser(userId);
          localStorage.setItem("userId", userId);
          setShowLogin(false);
        }
      } else if (message || error) {
        toast.error(message || error);
      }
    } catch (error) {
      console.error("Error details:", error.response);
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error('An error occurred while processing your request.');
      }
    }
  };

  return (
    <div className="login-popup" id='login'>
      <form onSubmit={handleFormSubmit} className='login-popup-conatainer'>
        <div className="login-popup-title">
          <h2>{isLogin ? "Login" : "Sign Up"}</h2>
          <span><IoCloseSharp className='closebar' onClick={() => setShowLogin(false)} /></span>
        </div>
        <div className="login-popup-inputs">
          {!isLogin && (
            <input
              type="text"
              name='name'
              onChange={handleInputChange}
              value={formData.name}
              placeholder='Enter Your Name'
              required
            />
          )}
          <input
            type="email"
            name='email'
            onChange={handleInputChange}
            value={formData.email}
            placeholder='Enter Your Email'
            required
          />
          <input
            type="password"
            name='password'
            onChange={handleInputChange}
            value={formData.password}
            placeholder='Password'
            required
          />
          <button type='submit'>{isLogin ? "Login" : "Create account"}</button>
        </div>
        {!isLogin && (
          <div className="login-pop-condition">
            <input type="checkbox" required />
            <p>By Continuing, I AGREE TO THE Terms of use & Privacy Policy</p>
          </div>
        )}
        <p>
          {isLogin ? "Create a new account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Click Here" : " Login Here"}
          </span>
        </p>
      </form>
      <ToastContainer /> {/* Include the ToastContainer for displaying notifications */}
    </div>
  );
};

export default Login;

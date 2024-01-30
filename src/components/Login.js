
// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const loginUser = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', formData);
      
      if (response && response.data) {
        console.log(response.data);
        navigate('/restaurant'); // Adjust the route as needed
      } else {
        console.error('Invalid response received from the server:', response);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Simulating login process:', formData);
    await loginUser();
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '400px' }}
          />
        </div>
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '400px' }}
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;


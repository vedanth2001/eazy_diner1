// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const signupUser = async () => {
    try {
      const response = await axios.post('http://localhost:8888/api/signup', formData);
  
      console.log('Response:', response);
  
      if (response && response.data) {
        console.log('Response data:', response.data);
        navigate('/login', { state: { signupSuccess: true, user: { name: formData.name, phoneNumber: formData.phoneNumber } } });
      } else {
        console.error('Invalid response received from the server:', response);
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Simulating signup process:', formData);
    await signupUser();
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '400px' }}
          />
        </div>
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
          <label>Phone Number:</label>
          <br />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
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
        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default Signup;




import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the signup API endpoint
      const response = await fetch('http://localhost:8888/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to login page after successful signup with a success message
        navigate('/login', { 
          state: { 
            signupSuccess: true, 
            user: { name: formData.name, phoneNumber: formData.phoneNumber } 
          }
        });
      } else {
        // Handle signup failure (e.g., display an error message)
        console.error('Signup failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
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
            style={{ width: '400px' }} // Adjust the width as needed
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
            style={{ width: '400px' }} // Adjust the width as needed
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
            style={{ width: '400px' }} // Adjust the width as needed
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
            style={{ width: '400px' }} // Adjust the width as needed
          />
        </div>
        <br />
        <button type="submit">Sign Up</button>
      </form>

      {/* Link to login page */}
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default Signup;

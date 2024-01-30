// src/components/ReviewBookingPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ReviewBookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDate, selectedSlot, selectedGuests } = location.state || {};
  
  // Placeholder data for restaurant
  const restaurantData = {
    name: 'Sample Restaurant',
    image: 'sample_image_url', // Replace with the actual image URL or use a placeholder
  };

  const handleConfirmBooking = () => {
    // You can implement the logic to confirm the booking, save to a database, etc.
    // After that, navigate to the confirmation page
    console.log('Confirm Booking button clicked');
    navigate(`/confirmation`, {
      state: {
        selectedDate,
        selectedSlot,
        selectedGuests,
      },
    });
  };

  // Additional text lines
  const confirmationMessage = `You are about to confirm your booking at ${restaurantData.name}. Kindly review the details below and decide whether you want to modify your booking or confirm it.`;

  return (
    <div>
      <h2>Review Booking</h2>
      <img src={restaurantData.image} alt={restaurantData.name} style={{ maxWidth: '100%' }} />
      <p>{confirmationMessage}</p>
      <p>Selected Date: {selectedDate}</p>
      <p>Selected Time: {selectedSlot?.time}</p>
      <p>Number of Guests: {selectedGuests}</p>

      {/* Button to Modify Bookings */}
      <button className="orange-button" onClick={() => navigate(-1)}>
        Modify Booking
      </button>
      <br></br>
      {/* Button to Confirm Booking */}
      <button className="orange-button" onClick={handleConfirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default ReviewBookingPage;

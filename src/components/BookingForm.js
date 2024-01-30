import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReviewBookingPage from './ReviewBookingPage'; // Import the new component

const BookingForm = () => {
  const navigate = useNavigate();
  const { restaurantId, slotId } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedGuests, setSelectedGuests] = useState(1);
  const [showReviewButton, setShowReviewButton] = useState(false);

  // Simulated data for available time slots
  const bookingSlots = [
    { id: 1, date: '2024-01-31', time: '18:00' },
    { id: 2, date: '2024-02-01', time: '19:00' },
    // Add more slots as needed
  ];

  // Find the selected slot based on slotId from the URL params
  const selectedSlotData = bookingSlots.find((slot) => String(slot.id) === slotId);

  // Set the selected slot if found
  if (selectedSlotData) {
    setSelectedSlot(selectedSlotData);
  }

  const handleGuestsChange = (e) => {
    setSelectedGuests(Number(e.target.value));
    setShowReviewButton(true); // Show the "Review Booking" button when guests are selected
  };

  const handleReviewBooking = () => {
    // Navigate to the ReviewBookingPage with the selected information
    
  console.log('Selected Date:', selectedDate);
  console.log('Selected Slot:', selectedSlot);
  console.log('Selected Guests:', selectedGuests);
    navigate(`/restaurant/${restaurantId}/booking/${slotId}/review`, {
      state: {
        selectedDate,
        selectedSlot,
        selectedGuests,
      },
    });
  };
  

  return (
    <div>
      <h2>NUMBER OF VISITORS</h2>
      {/* Display the selected slot information */}
      {selectedSlot && (
        <div>
          <h3>Selected Slot:</h3>
          <p>Date: {selectedSlot.date}</p>
          <p>Time: {selectedSlot.time}</p>
        </div>
      )}

      {/* Dropdown for selecting the number of guests */}
    
<label>
  Select Number of Guests:
  <select value={selectedGuests} onChange={handleGuestsChange}>
    {[1, 2, 3, 4, '4+'].map((guests) => (
      <option key={guests} value={guests}>
        {guests} Guests
      </option>
    ))}
  </select>
</label>
      {/* Display "Review Booking" button if guests are selected */}
      {showReviewButton && (
        <button onClick={handleReviewBooking} className="review-booking-button">
          Review Booking
        </button>
      )}
    </div>
  );
};

export default BookingForm;

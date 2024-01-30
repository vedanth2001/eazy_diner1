// // src/components/RestaurantDetails.js
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import BookingForm from './BookingForm';

// const RestaurantDetails = () => {
//   const { restaurantId } = useParams();
//   const [restaurant, setRestaurant] = useState(null);
//   const [bookingDates, setBookingDates] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [bookingSlots, setBookingSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);

//   useEffect(() => {
//     const fetchRestaurantDetails = async () => {
//       try {
//         console.log('Fetching restaurant details...'); // Add this log statement
//         const response = await fetch(`http://localhost:5000/api/restaurants/${restaurant.id}`);
//         console.log(response)
//         const data = await response.json();
//         console.log(data)
//         if (response.ok) {
//           setRestaurant(data.restaurant);
//         } else {
//           console.error('Error fetching restaurant details:', data.error);
//         }
//       } catch (error) {
//         console.error('Error fetching restaurant details:', error);
//       }
//     };

//     fetchRestaurantDetails();

//     // Simulate fetching available booking dates
//     const simulatedBookingDates = ['2024-01-31', '2024-02-01']; // Add more dates as needed
//     setBookingDates(simulatedBookingDates);
//   }, [restaurantId]);

//   const fetchBookingSlots = async (date) => {
//     // Simulate fetching available booking slots for the selected date
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     // Simulated data for booking slots (you can replace this with actual API call)
//     const simulatedBookingSlots = [
//       { id: 1, time: '18:00' },
//       { id: 2, time: '19:00' },
//       { id: 3, time: '20:00' },
//       // Add more slots as needed
//     ];

//     setBookingSlots(simulatedBookingSlots);
//   };

//   const handleDateChange = (e) => {
//     const newDate = e.target.value;
//     setSelectedDate(newDate);
//     fetchBookingSlots(newDate);
//     setSelectedSlot(null); // Reset selected slot when the date changes
//   };

//   const handleSlotSelection = (slot) => {
//     setSelectedSlot(slot);
//   };

//   const navigate = useNavigate();

//   const handleReviewBooking = () => {
//     if (selectedDate && selectedSlot) {
//       // Redirect to the BookingForm page with pre-filled date and time
//       navigate(`/restaurants/${restaurantId}/booking/${selectedDate}/${selectedSlot.id}/review`);
//     } else {
//       // Handle the case when date or slot is not selected
//       console.log('Please select both date and time.');
//     }
//   };

//   if (!restaurant) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{restaurant.name}</h1>
//       <img src={restaurant.image} alt={restaurant.name} />
//       <p>Location: {restaurant.location}</p>
//       <p>Cuisine: {restaurant.cuisine_type}</p>

//       {/* Display available booking dates */}
//       <h2>AVAILABLE BOOKING DATES</h2>
//       <div className="search-bar">
//         <input type="date" onChange={handleDateChange} value={selectedDate} />
//         <button className="book-button" onClick={handleReviewBooking}>
//           Review Booking
//         </button>
//       </div>

//       {/* Display available booking slots */}
//       {selectedDate && (
//         <div>
//           <h2>AVAILABLE BOOKING SLOTS</h2>
//           <ul>
//             {bookingSlots.map((slot) => (
//               <li key={slot.id}>
//                 <button onClick={() => handleSlotSelection(slot)}>{slot.time}</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Display selected date and time */}
//       {selectedDate && selectedSlot && (
//         <div>
//           <h3>Selected Date:</h3>
//           <p>{selectedDate}</p>
//           <h3>Selected Time:</h3>
//           <p>{selectedSlot.time}</p>
//         </div>
//       )}

//       {/* Additional details will be added here */}

//       {/* Add BookingForm component */}
//       {selectedDate && selectedSlot && (
//         <BookingForm
//           restaurantId={restaurantId}
//           bookingSlots={bookingSlots}
//           selectedDate={selectedDate}
//           selectedSlot={selectedSlot}
//         />
//       )}
//     </div>
//   );
// };

// export default RestaurantDetails;

// src/components/RestaurantDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

const RestaurantDetails = () => {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [bookingDates, setBookingDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookingSlots, setBookingSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        console.log('Fetching restaurant details...');
        const response = await fetch(`http://localhost:8088/api/restaurants/${restaurantId}`);
        const data = await response.json();
        if (response.ok) {
          setRestaurant(data.restaurant);
        } else {
          console.error('Error fetching restaurant details:', data.error);
        }
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
      }
    };

    if (restaurantId) {
      fetchRestaurantDetails();
    }
  }, [restaurantId]);

  const fetchBookingSlots = async (date) => {
    // Simulate fetching available booking slots for the selected date
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulated data for booking slots (you can replace this with actual API call)
    const simulatedBookingSlots = [
      { id: 1, time: '18:00' },
      { id: 2, time: '19:00' },
      { id: 3, time: '20:00' },
      // Add more slots as needed
    ];

    setBookingSlots(simulatedBookingSlots);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    fetchBookingSlots(newDate);
    setSelectedSlot(null); // Reset selected slot when the date changes
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const navigate = useNavigate();

  const handleReviewBooking = () => {
    if (selectedDate && selectedSlot) {
      // Redirect to the BookingForm page with pre-filled date and time
      navigate(`/restaurants/${restaurantId}/booking/${selectedDate}/${selectedSlot.id}/review`);
    } else {
      // Handle the case when date or slot is not selected
      console.log('Please select both date and time.');
    }
  };
  // const handleReviewBooking = () => {
    //     if (selectedDate && selectedSlot) {
    //       // Redirect to the BookingForm page with pre-filled date and time
    //       navigate(`/restaurants/${restaurantId}/booking/${selectedDate}/${selectedSlot.id}/review`);
    //     } else {
    //       // Handle the case when date or slot is not selected
    //       console.log('Please select both date and time.');
    //     }
    //   };
  if (!restaurantId || !restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="rest-name">{restaurant.name}</h1>
      <img src={restaurant.image} alt={restaurant.name} />
      <p>Location: {restaurant.location}</p>
      <p>Cuisine: {restaurant.cuisine_type}</p>

      {/* Display available booking dates */}
      <h2>AVAILABLE BOOKING DATES</h2>
      <div className="search-bar">
        <input type="date" onChange={handleDateChange} value={selectedDate} />
        <button className="book-button" onClick={handleReviewBooking}>
          Review Booking
        </button>
      </div>

      {/* Display available booking slots */}
      {selectedDate && (
        <div>
          <h2>AVAILABLE BOOKING SLOTS</h2>
          <ul>
            {bookingSlots.map((slot) => (
              <li key={slot.id}>
                <button onClick={() => handleSlotSelection(slot)}>{slot.time}</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display selected date and time */}
      {selectedDate && selectedSlot && (
        <div>
          <h3>Selected Date:</h3>
          <p>{selectedDate}</p>
          <h3>Selected Time:</h3>
          <p>{selectedSlot.time}</p>
        </div>
      )}

      {/* Additional details will be added here */}

      {/* Add BookingForm component */}
      {selectedDate && selectedSlot && (
        <BookingForm
          restaurantId={restaurantId}
          bookingSlots={bookingSlots}
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
        />
      )}
    </div>
  );
};

export default RestaurantDetails;

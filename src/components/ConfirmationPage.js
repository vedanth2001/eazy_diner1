import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const { selectedDate, selectedSlot, selectedGuests } = location.state || {};

  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Congratulations on succesfully booking a seat at your favourite restaurant through FineDiner!!</p>
      <p>Following are the details for your upcoming booking:</p>
      <p>Selected Date: {selectedDate}</p>
      <p>Selected Time: {selectedSlot?.time}</p>
      <p>Number of Guests: {selectedGuests}</p>
      <br></br>
      <br></br>
      <br></br>
      <p>You are requested to show up at your restaurant atleast 5 minutes prior to your reporting time to avoid any inconvenience </p>
      <p>We have a no-show policy as follows: If you dont show up at your restaurant during the time of your booking, you will not be charged any fee. However, if you dont show up for 3 times in a row, your account will be deactivated.</p>
    </div>
  );
};

export default ConfirmationPage;

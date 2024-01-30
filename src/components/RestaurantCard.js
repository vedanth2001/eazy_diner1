// src/components/RestaurantCard.js
import React from 'react';
import { Link } from 'react-router-dom';
 // Import your CSS file for styling

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img src={restaurant.image} alt={restaurant.name} className="card-image" />
      <div className="card-details">
        <h3>{restaurant.name}</h3>
        <p>Cuisine: {restaurant.cuisine_type}</p>
        <p>Location: {restaurant.location}</p>
        
        {/* Use Link to navigate to the RestaurantDetails page with the restaurantId parameter */}
        <Link to={`/restaurants/${restaurant.id}`} className="details-button">
          Restaurant Details
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;

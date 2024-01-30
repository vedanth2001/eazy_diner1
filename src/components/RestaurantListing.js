import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantListing = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [cuisineType, setCuisineType] = useState('');
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/restaurants');
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const lowerCuisine = (restaurant.cuisine || '').toLowerCase().trim();
    const lowerLocation = (restaurant.location || '').toLowerCase().trim();
    const lowerTitle = (restaurant.title || '').toLowerCase().trim();

    return (
      lowerCuisine.includes(cuisineType.toLowerCase().trim()) &&
      lowerLocation.includes(location.toLowerCase().trim()) &&
      lowerTitle.includes(title.toLowerCase().trim())
    );
  });

  return (
    <div>
      <h2>RESTAURANT LISTING</h2>
      {/* Search Bar */}
      <div className="search-rest">
        <input
          type="text"
          placeholder="Search by Cuisine Type"
          value={cuisineType}
          onChange={(e) => setCuisineType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {/* Display filtered restaurants */}
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
            {/* Include any additional details or links if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantListing;

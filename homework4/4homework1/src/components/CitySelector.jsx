import React from 'react';
import '../styles/CitySelector.css';

const CitySelector = ({ cities, onSelect }) => {
  return (
    <div className="city-selector">
      <label htmlFor="city">Выберите город:</label>
      <select id="city" onChange={(e) => onSelect(e.target.value)}>
        <option value="">-- Выберите --</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
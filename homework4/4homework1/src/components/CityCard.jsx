import React from 'react';
import '../styles/CityCard.css';

const CityCard = ({ city }) => {
  if (!city) return null;

  return (
    <div className="city-card">
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={city.name} width="100%" />
      <p>{city.description}</p>
      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityCard;
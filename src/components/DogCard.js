// DogCard.js

import React, { useState, useEffect } from 'react';

const DogCard = ({ dog }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      if (!dog) return null;
    const response = await fetch(`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`);
    const data = await response.json();
    setImageUrl(data.url);
    };
    fetchImage();
  }, [dog]);

  return (
    <div className="dog-card">
      {dog && (
        <>
          <img src={imageUrl} alt={dog.name} />
          <div>
            <h2>{dog.name}</h2>
            <p>Temperament: {dog.temperament}</p>
            <p>Life Span: {dog.life_span}</p>
            <p>Origin: {dog.origin}</p>
          </div>
        </>
      )}
    </div>
  );
  
};

export default DogCard;

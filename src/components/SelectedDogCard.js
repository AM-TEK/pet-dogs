import React from 'react';

function SelectedDogCard({ dog }) {
  return (
    <div className="flex flex-col p-4 m-2 border-4 border-yellow-300 rounded-lg md:flex-row">
      <img src={dog.image} alt={dog.breed} className='object-cover w-32 h-32 rounded-lg md:mr-4' />
      <div>
        <p className="text-xl">{dog.breed}</p>
        <p>Size: {dog.size}</p>
        <p>Exercise: {dog.exercise}</p>
        <p>Temperament: {dog.temperament}</p>
      </div>
    </div>
  );
}

export default SelectedDogCard;

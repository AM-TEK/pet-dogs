import React from 'react';

function SelectedDogCard({ dog }) {
  return (
    <div className="flex flex-col p-4 m-2 border-4 border-yellow-300 rounded-lg md:flex-row">
      {dog.reference_image_id && (
        <img
          src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
          alt={dog.breed}
          className='object-cover w-32 h-32 rounded-lg md:mr-4'
        />
      )}
      <div className='mt-2 ml-2 md:mt-0 lg:ml-6'>
        <h3 className='text-lg'>{dog.name}</h3>
        <p>Weight: {dog.weight.imperial}</p>
        <p>Height: {dog.height.imperial}</p>
        <p>Bred For: {dog.bred_for}</p>
        <p>Temperament: {dog.temperament}</p>
      </div>
    </div>
  );
}

export default SelectedDogCard;

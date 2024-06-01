import React, { useState } from 'react';
import SelectedDogCard from './SelectedDogCard';

function Favorites({ favorites, quizSubmitted }) {
  const [selectedDog, setSelectedDog] = useState(null);

  const handleClick = (dog) => {
    setSelectedDog(dog);
  };

  return (
    <div>
      <h2 className='m-2 text-xl'>Favorites</h2>
      {favorites.length === 0 && !quizSubmitted && (
        <p className="m-4">Add your favorite dog breeds after taking the quiz!</p>
      )}
      <ul className="flex flex-wrap justify-center lg:justify-start">
        {favorites.map(dog => (
          <li key={dog.id} className="flex flex-col items-center w-40 p-2 mx-2 my-2 border border-gray-700 rounded-md lg:w-1/3 hover:cursor-pointer">
            <img
              src={dog.image}
              alt={dog.breed}
              className='object-cover w-32 h-32 mb-2 rounded-md'              
              onClick={() => handleClick(dog)}
            />
            <span className="text-center">{dog.breed}</span>
          </li>
        ))}
      </ul>
      {selectedDog && <SelectedDogCard dog={selectedDog} />}
    </div>
  );
}

export default Favorites;

import { useState } from 'react';
import SelectedDogCard from './SelectedDogCard';
import dogsData from '../../lib/data';

function Favorites({ favorites, removeFromFavorites }) {
  const [selectedDog, setSelectedDog] = useState(null);

  const handleClick = (dog) => {
    setSelectedDog(dog);
  };

  const dogs = dogsData;

  let firstDog = null;
  if (favorites.length === 0 && dogs.length > 0) {
    firstDog = dogs[0];
  }

  return (
    <div>
      <h2 className='mx-2 text-xl'>Favorites</h2>
      {firstDog && (
        <div className="flex flex-col items-center w-40 p-2 mx-2 my-2 border border-gray-700 rounded-md hover:cursor-pointer">
          <img
            src={firstDog.image}
            alt={firstDog.breed}
            className="object-cover w-32 h-32 mb-2 rounded-md"
            onClick={() => handleClick(firstDog)}
            role="button"
          />
          <span className="text-center">{firstDog.breed}</span>
        </div>
      )}
      <ul className="flex flex-wrap justify-center lg:justify-start">
        {favorites.map(dog => (
          <li key={dog.id} className="relative flex flex-col items-center w-40 p-2 mx-2 border border-gray-700 rounded-md hover:cursor-pointer">
            {dog.reference_image_id && (
              <div className="relative">
                <img
                  src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                  alt={dog.name}
                  className='object-cover w-32 h-32 rounded-sm'              
                  onClick={() => handleClick(dog)}
                  role='button'
                />
                <button
                  onClick={() => removeFromFavorites(dog)}
                  className="absolute p-0.5 m-1 text-sm text-black bg-red-300 border border-black rounded-sm bottom-2 left-0 hover:bg-red-500 opacity-70"
                >
                  -
                </button>
              </div>
            )}
            <span className="text-center">{dog.name}</span>
          </li>
        ))}
      </ul>
      {selectedDog && <SelectedDogCard dog={selectedDog} />}
    </div>
  );
}

export default Favorites;

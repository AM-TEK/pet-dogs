import { useState } from 'react';
import SelectedDogCard from './SelectedDogCard';
import dogsData from '../../lib/data';
import RemoveButton from './RemoveButton';

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
      <h2 className='m-2 text-xl'>Favorites</h2>
      {firstDog && (
        <div className="flex flex-col items-center w-40 p-2 mx-2 my-2 border border-gray-700 rounded-md lg:w-1/3 hover:cursor-pointer">
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
      {favorites.length === 0 && (
        <p className="m-4">Add your favorite dog breeds after taking the quiz!</p>
      )}
      <ul className="flex flex-wrap justify-center lg:justify-start">
        {favorites.map(dog => (
          <li key={dog.id} className="relative flex flex-col items-center w-40 p-2 mx-2 my-2 border border-gray-700 rounded-md lg:w-1/3 hover:cursor-pointer">
            {dog.reference_image_id && (
              <img
                src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                alt={dog.name}
                className='object-cover w-32 h-32 mb-2 rounded-md'              
                onClick={() => handleClick(dog)}
                role='button'
              />
            )}
            <span className="text-center">{dog.name}</span>
            <RemoveButton onClick={() => removeFromFavorites(dog)} />
          </li>
        ))}
      </ul>
      {selectedDog && <SelectedDogCard dog={selectedDog} />}
    </div>
  );
}

export default Favorites;

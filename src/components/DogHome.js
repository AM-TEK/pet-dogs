import { useState, useEffect, useMemo } from 'react';
import Favorites from './Favorites';

function DogHome() {
  const [dogs, setDogs] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dog');
        const data = await response.json();
        setDogs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const addToFavorites = (dog) => {
    if (!favorites.find(favorite => favorite.id === dog.id)) {
      setFavorites([...favorites, { ...dog, favorites: true }]);
    }
  };

  const removeFromFavorites = (dogToRemove) => {
    setFavorites(favorites.filter(favorite => favorite.id !== dogToRemove.id));
  };
  
  return (
    <div className="flex flex-col overflow-x-hidden bg-white lg:flex-row">
      <section className="w-full p-2 lg:w-1/2 lg:border-l-4">
        <h2 className='m-2 text-xl'>Checkout some dogs:</h2>
        <ul>
          {dogs && dogs.map(dog => (
            <li key={dog.id} className='my-4'>
              <div className='flex flex-col items-start md:flex-row md:items-center'>
                {dog.reference_image_id && (
                  <button onClick={() => addToFavorites(dog)} className="relative">
                  <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt={dog.name} className='object-cover m-2 border border-gray-700 rounded-sm w-36 h-36 min-w-36'
                  />
                  <span className="absolute p-0.5 m-1 text-sm text-black bg-yellow-300 border border-black rounded-sm bottom-2 left-2 hover:bg-yellow-500 opacity-70">
                    +
                  </span>
                </button>
                )}
                <div className='mt-2 ml-2 md:mt-0 lg:ml-6'>
                  <h3 className='text-lg'>{dog.name}</h3>
                  <p>Weight: {dog.weight.imperial}</p>
                  <p>Height: {dog.height.imperial}</p>
                  <p>Bred For: {dog.bred_for}</p>
                  <p>Temperament: {dog.temperament}</p>
                </div>
              </div>
              <hr className="my-2 border-black"/>
            </li>
          ))}
        </ul>
      </section>
      <section className="w-full p-2 lg:w-1/2 lg:border-l-4">
        <Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />
      </section>
    </div>
  );
}

export default DogHome;

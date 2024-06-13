import { useState } from 'react';
import SelectedDogCard from './SelectedDogCard';
import Modal from './Modal';

function Favorites({ favorites, removeFromFavorites }) {
  const [selectedDog, setSelectedDog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (dog) => {
    setSelectedDog(dog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDog(null);
  };

  return (
    <div>
      {favorites.length === 0 && (
        <p className="m-0 text-center text-gray-500">Add dogs to your favorites list!</p>
      )}
      {/* <h2 className='mx-2 text-xl'>Favorites</h2> */}
      <ul className="flex flex-wrap justify-center lg:justify-start">
        {favorites.map(dog => (
          <li key={dog.id} className="relative flex flex-col items-center justify-center w-40 p-2 mx-2 border border-gray-700 rounded-md hover:cursor-pointer">
            {dog.reference_image_id && (
              <div className="relative">
                <img
                  src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                  alt={dog.name}
                  className='object-cover rounded-sm w-28 h-28'              
                  onClick={() => handleClick(dog)}
                  role='button'
                />
                <button
                  onClick={() => removeFromFavorites(dog)}
                  className="absolute p-0.5 mx-1 text-sm text-black bg-red-300 border border-black rounded-sm bottom-1 left-0 hover:bg-red-500 opacity-70"
                >
                  -
                </button>
              </div>
            )}
            <span className="text-[0.6rem] text-center">{dog.name}</span>
          </li>
        ))}
      </ul>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedDog && <SelectedDogCard dog={selectedDog} />}
      </Modal>
    </div>
  );
}

export default Favorites;

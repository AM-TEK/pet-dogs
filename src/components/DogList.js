import React, { useState, useEffect } from 'react';
import DogQuiz from './DogQuiz';
import Favorites from './Favorites';
import SubmitButton from './SubmitButton';
import FavoriteButton from './FavoriteButton';
import dogsData from '../../lib/data';
import Map from './Map';

function DogList() {
  const [dogs, setDogs] = useState(dogsData);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);


  const handleAnswer = (dogId, selectedOption) => {
    setUserAnswers(prevState => ({
      ...prevState,
      [dogId]: selectedOption
    }));
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    dogs.forEach(dog => {
      if (userAnswers[dog.id] === dog.answer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setQuizSubmitted(true);
  };

  const addToFavorites = (dog) => {
    if (!favorites.find(favorite => favorite.id === dog.id)) {
      setFavorites([...favorites, { ...dog, favorites: true }]);
    }
  };
  
  return (
    <div className="flex flex-col overflow-x-hidden lg:flex-row bg-sky-200">
      <section className="w-full p-2 border-b-4 lg:w-1/2">
        <h2 className='m-2 text-xl'>Dogs Quiz</h2>
        <h3 className='m-2'>Choose the dog breed based off the picture: </h3>
        <ul>
          {dogs && dogs.map((dog, index) => (
            <li key={`${dog.id}-${index}`} className="my-2">
              <DogQuiz
                dog={dog}
                handleAnswer={handleAnswer}
                userAnswers={userAnswers}
              />
              {quizSubmitted && (
                <FavoriteButton onClick={() => addToFavorites(dog)} />
              )}
              <hr className="my-2 border-black"/>
            </li>
          ))}
        </ul>
        <div>
          {!quizSubmitted && <SubmitButton onClick={handleSubmit} />}
          {score !== null && <p className='mx-2'>Score: {(score / dogs.length * 100).toFixed(2)}%</p>}
        </div>
      </section>
      <section className="w-full p-2 border-b-4 lg:w-1/2 lg:border-l-4">
        <Favorites favorites={favorites} quizSubmitted={quizSubmitted} />
      </section>
    </div>
  );
}

export default DogList;

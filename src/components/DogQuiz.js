function DogQuiz({ dog, handleAnswer, userAnswers, onFavoriteClick }) {
  return (
    <div className='relative flex items-center'>
      <img 
        src={dog.image} 
        alt={dog.breed} 
        className='object-cover w-32 h-32 m-2 border border-gray-700 rounded-md' 
      />
      <ul className='flex flex-col justify-center flex-grow p-2 m-2'>
        {dog.options.map(option => (
          <li key={option}>
            <button 
              onClick={() => handleAnswer(dog.id, option)}
              className={`border my-1 p-1 rounded-md text-sm ${userAnswers[dog.id] === option ? 'bg-yellow-300' : 'border-gray-400'} hover:bg-yellow-50`}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => onFavoriteClick(dog)}
        className="absolute p-0.5 m-1 text-sm text-black bg-yellow-300 border border-black rounded-md bottom-7 left-2 hover:bg-yellow-500 opacity-70"
      >
        +
      </button>
    </div>
  );
}

export default DogQuiz;

function DogQuiz({ dog, handleAnswer, userAnswers }) {
  return (
    <div className='flex flex-col items-center md:flex-row'>
      <img 
        src={dog.image} 
        alt={dog.breed} 
        className='object-cover w-32 h-32 m-2 rounded-lg' 
      />
      <ul>
        {dog.options.map(option => (
          <li key={option} className='my-1'>
            <button 
              onClick={() => handleAnswer(dog.id, option)}
              className={`border mx-2 my-1 p-1 rounded-md text-sm ${userAnswers[dog.id] === option ? 'bg-yellow-300' : 'border-gray-400'} hover:bg-yellow-50`}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogQuiz;

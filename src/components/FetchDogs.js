// import axios from 'axios';

//Fetch list of dogs from backend API with Axios GET request
  // useEffect(() => {
  //   axios.get('http://localhost:8080/dogs')
  //     .then(response => {
  //       setDogs(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching dogs:', error);
  //     });
  // }, []);
  //Update the userAnswers state to keep track of their selections
  // const handleAnswer = (dogId, selectedOption) => {
  //   setUserAnswers(prevState => ({
  //       ...prevState,
  //       [dogId]: selectedOption
  //   }));
  // };
  //Send a POST request to the '/score' endpoint with userAnswers data, use the response to update the score state and update quizSubmitted to true
  // const handleSubmit = () => {
  //   axios.post('http://localhost:8080/score', userAnswers)
  //     .then(response => {
  //         setScore(response.data.score);
  //         setQuizSubmitted(true);
  //     })
  //     .catch(error => {
  //         console.error('Error calculating score:', error);
  //     });
  // };
  //Send a POST request to the '/dogs' endpoint with the updated dog object (favorites: true)
  // const addToFavorites = (dog) => {
  //   axios.post('http://localhost:8080/dogs', { ...dog, favorites: true })
  //     .then(response => {
  //         if (!favorites.find(favorite => favorite.id === dog.id)) {
  //             setFavorites([...favorites, dog]);
  //         }
  //     })
  //     .catch(error => {
  //         console.error('Error adding dog to favorites:', error);
  //     });
  // };
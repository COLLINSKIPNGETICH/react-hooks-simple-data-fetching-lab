// create your App component here
// App.js

import React, { useState, useEffect } from 'react';

const App = () => {
  // State to store the dog image URL and loading status
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect to fetch data from the API
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Set loading status to true when starting the fetch
        setIsLoading(true);

        // Fetch data from the API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        // Set the dog image URL and loading status based on the response
        setDogImage(data.message);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors if needed
        setIsLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div>
      {/* Display "Loading..." when the component is first rendered */}
      {isLoading && <p>Loading...</p>}

      {/* Display the dog image when available */}
      {dogImage && (
        <img src={dogImage} alt="A Random Dog" style={{ width: '300px', height: 'auto' }} />
      )}
    </div>
  );
};

export default App;

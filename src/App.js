import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [jsonObject, setJsonObject] = useState('')

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setJsonObject(result.sprites.front_default);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="App">
        <h1>Testing</h1>
        <img src={jsonObject} alt='Not Loading' />
      </div>
    );
  }
}

export default App;

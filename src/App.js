import './App.css';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';

function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [sprite, setSprite] = useState('')
  const [name, setName] = useState('')
  const [currentPokemon, setCurrentPokemon] = useState(1)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSprite(result.sprites.front_default);
          setName(result.species.name);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [currentPokemon])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <Card variant='outlined'>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align='center' >
                {name}
              </Typography>
              <CardMedia
                component="img"
                height="300"
                image={sprite}
                alt="Loading" />
            </CardContent>
          </Card>
        </Grid>

        <Grid>
          <Stack spacing={2} direction='row'>
            <Button onClick={() => {
              let temp = currentPokemon - 1;
              if (temp < 0) {
                temp = 1;
              } else {
                setCurrentPokemon(temp);
              }
            }}
              variant="contained">Previous</Button>
            <Button onClick={() => {
              let temp = currentPokemon + 1;
              if (temp > 898) {
                temp = 898;
              } else {
                setCurrentPokemon(temp);
              }
            }}
              variant="contained">Next</Button>
          </Stack>
        </Grid>

      </Grid>
    );
  }
}

export default App;

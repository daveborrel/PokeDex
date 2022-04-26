import './App.css';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import NavigationBar from './components/NavigationBar';
import TeamCard from './components/TeamCard';


function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [sprite, setSprite] = useState('')
  const [name, setName] = useState('')
  const [types, setTypes] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState(1)
  const [team, setTeam] = useState([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSprite(result.sprites.front_default);
          setName(result.species.name);
          setTypes(result.types);
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
      <Container>
        <NavigationBar />
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
          <Grid item xs={3}>
            <Stack spacing={2} direction='row'>
              <Card variant='outlined'>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" align='center' >
                    {name.charAt(0).toUpperCase() + name.substring(1)}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div" align='center' >Types:</Typography>
                  <Stack spacing={2} direction='row'>
                    {types.map(t => (
                      <Paper elevation={1}>
                        {t.type.name}
                      </Paper>
                    ))}
                  </Stack>
                  <CardMedia
                    component="img"
                    height="300"
                    image={sprite}
                    alt="Loading" />
                </CardContent>
              </Card>
              <TeamCard team={team}></TeamCard>
              </Stack>
          </Grid>

          <Grid>
            <Stack spacing={2} direction='row'>
              <Button onClick={() => {
                let curr = currentPokemon;
                let temp = curr - 1;
                if (temp === 0) {
                  setCurrentPokemon(1);
                } else {
                  setCurrentPokemon(temp);
                }
              }}
                variant="contained">Previous</Button>
              <Button onClick={() => {
                //Makes this an immutable list, adds current pokemon to team.
                const newTeam = team
                var isIncluded = newTeam.includes(name)
                var underSix = newTeam.length < 6

                if (!isIncluded && underSix) {
                  newTeam.push(name)
                  setTeam(newTeam)
                }
              
              }}
              variant='contained'>Add to Team</Button>
              <Button onClick={() => {
                let curr = currentPokemon;
                let temp = curr + 1;
                if (temp > 898) {
                  setCurrentPokemon(898);
                } else {
                  setCurrentPokemon(temp);
                }
              }}
                variant="contained">Next</Button>
            </Stack>
          </Grid>

        </Grid>
      </Container>
    );
  }
}

export default App;

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
import SearchBar from './components/SearchBar';

// Represents the main application.
function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [errorState, setErrorState] = useState(false)
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [types, setTypes] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState(1)
  const [team, setTeam] = useState([])
  const [sprite, setSprite] = useState('')

  useEffect(() => {
    console.log('Pokemon API Called.')
    fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`)
      .then((response) => {
        if (response.status >= 200 & response.status <= 299) {
          return response
        } else {
          throw Error(response.statusText)
        }
      })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setImage(result.sprites.other['official-artwork'].front_default)
          setSprite(result.sprites.front_default)
          setTypes(result.types)
          setName(capitalizeString(result.species.name))
        }).catch((error) => {
          setCurrentPokemon(1)
          console.log(error) // Modified the structure of the API call in order to catch errors, without stopping web-app.
          setErrorState(true)
          console.log('changed error state')
        })
  }, [currentPokemon, team])

  if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <Container>
        <NavigationBar />
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
          <Grid item xs={3}>
            <SearchBar
              // You can pass a function into a child component to update state within it.
              error={errorState}
              errorFunction={setErrorState}
              function={setCurrentPokemon}
            />
            <Stack spacing={2} direction='row'>
              <Card variant='outlined'>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" align='center' >
                    {name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div" align='center' >Types:</Typography>
                  <Stack spacing={2} direction='row'>
                    {types.map(t => (
                      <Paper elevation={1} key={t.type.name}>
                        <Typography color={colours[t.type.name]}>
                          {t.type.name}
                        </Typography>
                      </Paper>
                    ))}
                  </Stack>
                  <CardMedia component="img" height="300" image={image} alt="Loading" />
                </CardContent>
              </Card>
              <TeamCard team={team} sprite={sprite}></TeamCard>
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
              <Button onClick={() => { //Maybe turn this into a hash map?
                const newTeam = team
                var isIncluded = newTeam.includes(name)
                var underSix = newTeam.length < 6

                if (!isIncluded && underSix) {
                  setTeam(newTeam => newTeam.concat(name))
                  console.log(`added ${name} to team state.`)
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

//Helpers

/**
 * capitalize the string
 * @param   {string} name        uncapitalized name of pokemon
 * @return  {string}             capitalized name of pokemon
 */
function capitalizeString(name) {
  var editedName = name.charAt(0).toUpperCase() + name.substring(1);
  return editedName;
}

const colours = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

export default App;

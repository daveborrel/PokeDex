import { Card, CardContent, CardMedia } from "@mui/material"
import { Typography } from "@mui/material"
import { Stack } from "@mui/material"
import { IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

// Represents the card where the team is displayed updates with the current state.
export default function TeamCard(prop) {
    let teamSize = prop.team.length

    //The button should remove the index of the pokemon.
    //Still trying to figure out how to do this.
    function removePokemon(i) {

        let emptyTeam = []
        //This removes the first index
        prop.teamFunction(prevState => emptyTeam.concat(prevState.filter(name => name !== 'Bulbasaur')));
        console.log(i)
        console.log(teamSize);
        alert('team size is ' + teamSize);
    }

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align='center'>
                    Team
                </Typography>
                <Stack direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={2}>
                    <Stack spacing={4} direction='column'>
                        {prop.team.map(n => (
                            <Typography key={n}>{n}</Typography>
                        ))}
                    </Stack>
                    <Stack spacing={2} direction='column'>
                        {prop.sprites.map(i => (
                            <Stack key={i} direction='row'>
                                <CardMedia component="img" height="40" image={i} alt="Loading" />
                                <IconButton onClick={(i) => removePokemon(i)} aria-label="delete">
                                    <DeleteIcon></DeleteIcon>
                                </IconButton>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}


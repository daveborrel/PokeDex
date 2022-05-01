import { Card, CardContent, CardMedia } from "@mui/material"
import { Typography } from "@mui/material"
import { Stack } from "@mui/material"

// Represents the card to which the team appears on the web-application.
export default function TeamCard(prop) {

    //TODO: Need to find a way to update team actively.
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align='center'>
                    Team
                </Typography>
                {prop.team.map(n => (
                    <Stack spacing={2} direction='row' key={n}>
                        <Typography key={n}>{n}</Typography>
                    </Stack>
                ))}
                <CardMedia component="img" height="50" image={prop.sprite} alt="Loading" />
            </CardContent>
        </Card>
    )
}
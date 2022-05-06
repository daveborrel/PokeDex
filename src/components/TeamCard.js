import { Card, CardContent, CardMedia } from "@mui/material"
import { Typography } from "@mui/material"
import { Stack } from "@mui/material"

// Represents the card where the team appears.
export default function TeamCard(prop) {

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
                            <CardMedia key={i} component="img" height="40" image={i} alt="Loading" />
                        ))}
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}
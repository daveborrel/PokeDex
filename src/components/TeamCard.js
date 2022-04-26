import { Card, CardContent } from "@mui/material"
import { Typography } from "@mui/material"
import { useState } from "react"

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
                <Typography>{n}</Typography>
            ))}
            </CardContent>
        </Card>
    )
}
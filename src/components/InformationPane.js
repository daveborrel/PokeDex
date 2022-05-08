import React from 'react'
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';
import { useState } from 'react';

/**
 * @classdesc this is the the dynamic information panel that displays relevant information.
 */
export default function InformationPane() {
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked((prev) => !prev)
    }

    /**
     * 
     * @returns changes the box height depending on the checked state.
     */
    function changeBoxHeight() {
        return (checked ? 180 : 10);
    }

    const icon = (
        <Paper elevation={4}>
            <Typography>
            HP: 100
            Moveset: Quick Attack
            </Typography>
        </Paper>
    )

    return (
        <Box sx={{ changeBoxHeight }}>
            <Box>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                    label="Click for more information."
                />
                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                    {icon}
                </Slide>
            </Box>
        </Box>
    )
}

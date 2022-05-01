import { TextField } from "@mui/material"

export default function SearchBar(props) {

    // Typing in the field will already search the pokemon. 
    const handleSubmit = (e) => {
        e.preventDefault()

        // If string, turns it to lowercase.
        let pokemonName = document.getElementById('searchButtonInput').value.toLowerCase()

        // If there is an error, do nothing, and print out error message.
        try {
            props.function(pokemonName)
        } catch (error) {
            console.error('Error Caught In Search Bar')
        }
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit} required>
            <TextField
                id="searchButtonInput"
                label="Search"
                variant="filled"
                fullWidth
            />
        </form>
    )
}
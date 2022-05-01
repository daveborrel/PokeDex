import { TextField } from "@mui/material"

export default function SearchBar(props) {

    // Typing in the field will already search the pokemon. 
    const handleSubmit = (e) => {
        e.preventDefault()

        // If string, turns it to lowercase.
        let pokemonName = document.getElementById('searchButtonInput').value.toLowerCase()

        props.function(pokemonName)
        props.errorFunction(false)
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit} required>
            <TextField
                id="searchButtonInput"
                label="Search"
                variant="filled"
                fullWidth
                error={props.error}
            />
        </form>
    )
}
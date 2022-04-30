import { TextField } from "@mui/material"

export default function SearchBar(props) {

    //TODO1: figure out how to make a search bar on Youtube.

    const handleSubmit = (e) => {
        e.preventDefault()



        //Updates the current pokemon to whatever the id was
        props.function(document.getElementById('searchButtonInput').value)
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
                id="searchButtonInput"
                label="Search Pokemon"
                variant="filled"
                fullWidth
            />
        </form>
    )
}
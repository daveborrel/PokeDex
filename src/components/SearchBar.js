import { TextField } from "@mui/material"

export default function SearchBar(props) {

    const handleSubmit = (e) => {
        e.preventDefault()

        let value = document.getElementById('searchButtonInput').value
        let number = 0

        console.log('result of isNaN(value) is : ' + isNaN(value))
        
        // Check if string or integer.
        if (isNaN(value)) {
            console.log('Convert this into its id')
            value.toLowerCase()
            props.function(value)
        } else {
            number = parseInt(value)
            props.function(number)
        }

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
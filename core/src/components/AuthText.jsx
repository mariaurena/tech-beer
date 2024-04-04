import TextField from '@mui/material/TextField';


function AuthText({ id, label, name, autoComplete }) {

    return (
        <TextField
            variant      = "outlined"
            margin       = "normal"
            id           = { id }
            label        = { label }
            name         = { name }
            autoComplete = { autoComplete }
            autoFocus
            required
            fullWidth
        />
    )
}

export default AuthText
import Button from '@mui/material/Button';


function AuthButton({ handleOnClick, text }) {

    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '24px 0 16px' }}
            onClick={handleOnClick}
        >
            { text }
      </Button>
    )
}

export default AuthButton
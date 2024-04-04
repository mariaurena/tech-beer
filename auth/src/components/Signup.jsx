import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { onLogin } from '../state/actions';

import AuthIcon from './remotes/AuthIcon'
import AuthText from './remotes/AuthText';
import AuthButton from './remotes/AuthButton';


function SignUp({ onLogin, onNavigate }) {

  const handleOnClick = (e) => {
    e.preventDefault(); // Prevenir el envío del formulario por defecto
    onLogin()    // cambia el estado de authenticated
    onNavigate() // navega a través del padre en el container
  }

  return (
    <Container component="main" maxWidth="xs">
      <div style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <AuthIcon />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ width: '100%', marginTop: '24px' }}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <AuthText id = "firstName" label = "First Name" name = "firstName" autoComplete = "fname"/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <AuthText id = "lastName" label = "Last Name" name = "lastName" autoComplete = "lname"/>
            </Grid>
            <Grid item xs={12}>
              <AuthText id = "email" label = "Email" name = "email" autoComplete = "email"/>
            </Grid>
            <Grid item xs={12}>
                <AuthText id = "password" label = "Password" name = "password" autoComplete = "current-password"/>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <AuthButton handleOnClick = { handleOnClick } text = { "Sign up" }/>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/auth/signin">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5} style={{ textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" to="/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => dispatch(onLogin()),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);

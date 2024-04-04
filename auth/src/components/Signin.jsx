import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { onLogin } from '../state/actions';

import AuthIcon   from './remotes/AuthIcon'
import AuthText   from './remotes/AuthText';
import AuthButton from './remotes/AuthButton';

function SignIn({ onLogin, onNavigate }) {

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
          Sign in
        </Typography>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ width: '100%', marginTop: '8px' }}
          noValidate
        >
          <AuthText id = "email" label = "Email" name = "email" autoComplete = "email"/>
          <AuthText id = "password" label = "Password" name = "password" autoComplete = "current-password"/>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <AuthButton handleOnClick={ handleOnClick } text = { "Sign in "}/>
          <Grid container>
            <Grid item>
              <Link to="/auth/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8} style={{ textAlign: 'center' }}>
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

export default connect(null, mapDispatchToProps)(SignIn);

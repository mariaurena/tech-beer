import React from 'react';
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}));

const HeaderLink = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1, 1.5),
}));

export default function Header({ isSignedIn, onSignOut }) {


  const navigate = useNavigate()

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
      navigate('/auth/signin')
    }
  };

  return (
    <React.Fragment>
      <HeaderAppBar position="static" color="inherit" elevation={0}>
        <HeaderToolbar>
          <HeaderLink
            color="primary"
            variant="outlined"
            component={RouterLink}
            to={isSignedIn ? '/catalogo' : '/auth/signin'}
            onClick={onClick}
          >
            {isSignedIn ? 'Logout' : 'Login'}
          </HeaderLink>
        </HeaderToolbar>
      </HeaderAppBar>
    </React.Fragment>
  );
}

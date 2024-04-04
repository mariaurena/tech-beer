import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { onLogin, onLogout } from "./state/actions";

import Progress from "./components/Progress";
import Header   from "./components/Header"

// se cargan sólo cuando los necesitamos
const AuthLazy     = lazy( () => import('./components/AuthApp'))
const CatalogoLazy = lazy( () => import('./components/CatalogoApp'))
const VentasLazy   = lazy( () => import('./components/VentasApp'))


const App = ( {authenticated, login, logout} ) => {
  
    return (

        <div>
            {
                authenticated && 
                <Header
                    onSignOut={() => logout()  }
                    isSignedIn={ authenticated } />
            }
    
            <Suspense fallback={<Progress />}>
                <Routes>
                    <Route exact path = "/auth/signin" element = {<AuthLazy onNavigate={() => login()  } />} />
                    <Route exact path = "/catalogo"    element = {authenticated ? <CatalogoLazy /> : <Navigate to = "/auth/signin" />} />
                    <Route exact path = "/ventas"      element = {authenticated ? <VentasLazy /> : <Navigate to = "/auth/signin" />} />
                </Routes>
            </Suspense>
        </div>

      
    );
  };

  const mapStateToProps = ( state ) => {
    return {
        authenticated: state.authenticated
    }
  }

  const mapDispatchToProps = ( dispatch ) => {
    return {
        login : () => dispatch( onLogin()  ),
        logout: () => dispatch( onLogout() ),
    }
  }
  
export default connect( mapStateToProps , mapDispatchToProps )( App );
  
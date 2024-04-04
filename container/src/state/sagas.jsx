import { all, put } from 'redux-saga/effects'
import { onLogin, onLogout } from './actions'

function* onLoginSaga(){

    // Lógica para iniciar sesión, aquí iría la llamada a la API
    // por ejemplo para autenticar al usuario y luego despachar
    // la acción correspondiente dependiendo del resultado
    yield put(onLogin())
    
}

function* onLogoutSaga(){

    // Lógica para terminar la sesión
    yield put(onLogout())
    
}

export default function* rootSaga() {

    yield all([
        onLoginSaga(),
        onLogoutSaga()
    ])

}
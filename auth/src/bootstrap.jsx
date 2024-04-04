import ReactDOM from 'react-dom/client'
import { createBrowserHistory } from 'history'
import App from './App'

import { Provider } from 'react-redux'
import store from './state/store'

// Mount function to start up the app
const mount = (el, { onNavigate }) => {

    ReactDOM.createRoot(el).render(
        <Provider store = { store }>
            <App onNavigate={onNavigate} history={history} />
        </Provider>
    );

}

const devRoot = document.getElementById('_auth-dev-root');
if (devRoot) {
    // no tiene onNavigate cuando se ejecuta de forma ailada por lo que
    // dará un error al pulsar 'Sign In' en auth ejecutándose aisladamente
    mount(devRoot, { defaultHistory: createBrowserHistory() });
}

// We are running through container
// and we shoud export the mount function
export { mount }
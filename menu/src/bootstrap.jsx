import ReactDOM from 'react-dom/client'
import { createBrowserHistory } from 'history'
import App from './App'

// Mount function to start up the app
const mount = (el, { onRouteChange }) => {

    // Creamos la función handleRouteChange para propagar el cambio de ruta hacia arriba
    const handleRouteChange = (path) => {
        onRouteChange(path);
    };

    ReactDOM.createRoot(el).render(<App onRouteChange={ handleRouteChange } />);

}

const devRoot = document.getElementById('_menu-dev-root');
if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
}

// We are running through container
// and we shoud export the mount function
export { mount }
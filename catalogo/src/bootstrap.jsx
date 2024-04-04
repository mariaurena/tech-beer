import ReactDOM from 'react-dom/client'
import { createBrowserHistory } from 'history'
import App from './App'

// Mount function to start up the app
const mount = (el) => {

    ReactDOM.createRoot(el).render(
        <App history={history} />
    );

}

const devRoot = document.getElementById('_catalogo-dev-root');
if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
}

// We are running through container
// and we shoud export the mount function
export { mount }
import ReactDOM from 'react-dom/client'
import AppIcon from './AppIcon'
import AppText from './AppText'
import AuthButton from './components/AuthButton';

// icono
const mountIcon = (el) => {

    ReactDOM.createRoot(el).render(
        <AppIcon history={history} />
    );

}

// texto
const mountText = (el, id, label, name, autoComplete) => {

    ReactDOM.createRoot(el).render(
        <AppText history={history} id = { id } label = { label } name = { name } autoComplete = { autoComplete } />
    );

}

// botón
const mountButton = (el, handleOnClick, text ) => {

    ReactDOM.createRoot(el).render(
        <AuthButton handleOnClick={ handleOnClick } text = { text }/>
    );

}

const devRoot = document.getElementById('_core-dev-root');
if (devRoot) {
    mountIcon(devRoot);
}

// We are running through container
// and we shoud export the mount function
export { mountIcon, mountText, mountButton }
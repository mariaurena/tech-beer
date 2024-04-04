import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserHistory } from 'history'

import { Provider } from 'react-redux'
import store from './state/store'

const history = createBrowserHistory()

ReactDOM.createRoot(document.querySelector('#root')).render(
  <Provider store = { store }>
    <BrowserRouter history = { history } >
      <App />
    </BrowserRouter>
  </Provider>
);

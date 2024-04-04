import VentasBox from './components/VentasBox'; 
import { BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'


const generateClassName = createGenerateClassName({

  // para los estilos (css)
  // cambiamos el prefijo por defecto que material asigna a las classnames (jss) por ve
  // solo en auth para que no colisione con los demás proyectos
  productionPrefix: 've', 
})

function App({ history }) {
  return (
    <StylesProvider generateClassName = { generateClassName }>
      <Router history = { history }>
        <div className="App">
          <VentasBox />
        </div>
      </Router>
    </StylesProvider>

  );
}

export default App;

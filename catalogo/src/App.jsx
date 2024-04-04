import CatalogBox from './components/CatalogBox'; 
import { BrowserRouter as Router } from 'react-router-dom';



function App({ history }) {


  return (
    <Router history = { history }>
      <div className="App">
        <CatalogBox /> 
      </div>
    </Router>
  );
}

export default App;

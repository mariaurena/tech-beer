import MenuBox from './components/MenuBox'; 
import { BrowserRouter as Router } from 'react-router-dom';



function App({ onRouteChange }) {

  const handleOnRouteChange = (path) => {
    onRouteChange(path)
  }

  return (
    <Router history = { history }>
      <div className="App">
        <MenuBox onRouteChange={ handleOnRouteChange }/>
      </div>
    </Router>

  );
}

export default App;

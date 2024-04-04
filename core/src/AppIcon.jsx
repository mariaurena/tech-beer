import AuthIcon from './components/AuthIcon'; 
import { BrowserRouter as Router } from 'react-router-dom';

function App({ history }) {


  return (
    <Router history = { history }>
      <div className="App">
        <AuthIcon /> 
      </div>
    </Router>
  );
}

export default App;

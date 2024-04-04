import AuthText from './components/AuthText'; 
import { BrowserRouter as Router } from 'react-router-dom';

function App({ history, id, label, name, autoComplete }) {


  return (
    <Router history = { history }>
      <div className="App">
        <AuthText id = { id } label = { label } name = { name } autoComplete = { autoComplete }/> 
      </div>
    </Router>
  );
}

export default App;

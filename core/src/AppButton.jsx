import AuthButton from './components/AuthButton'; 
import { BrowserRouter as Router } from 'react-router-dom';

function App({ handleOnClick, text }) {


  return (
    <Router>
      <div className="App">
        <AuthButton handleOnClick={ handleOnClick } text = { text }/> 
      </div>
    </Router>
  );
}

export default App;

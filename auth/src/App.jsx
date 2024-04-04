import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';


export default function App( { history, onNavigate } ) {
  return (
    <div>
      <Router history = { history }>
        <Routes>
          <Route
            path="/auth/signin"
            element={<Signin onNavigate={onNavigate}  />} 
          />
          <Route
            path="/auth/signup"
            element={<Signup onNavigate={onNavigate}  />} 
          />
        </Routes>
      </Router>
    </div>
  );
}



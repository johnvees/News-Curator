import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './assets/scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;

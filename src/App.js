import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Map from './components/Map';

function App() {
  return (
    <Router>
      <h1>Map</h1>
      <Route exact path="/" component={Map} />
    </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Navbar from "./components/Navbar.component"
import PersonList from "./components/PersonList.component"

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={PersonList} />
    </Router>
  );
}

export default App;

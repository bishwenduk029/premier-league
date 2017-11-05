import React from 'react';
import Header from './header';
import Matches from './matches';
import '../App.css';

const App = () => (
  <div className="App">
    <Header title="Cambium Premier League" color="#FF5722" />
    <Matches />
  </div>
);

export default App;

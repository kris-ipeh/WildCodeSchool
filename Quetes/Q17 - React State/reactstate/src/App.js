import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Password.jsx';
import Password from './Password.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Password security Check</h1>
        </header>
        <p>
          Différents tests vont être effectués : 
          <ul>
          <li>Mot de passe faible (inferieur à 6 caractères / tout en minuscule / pas de caractères spéciaux)</li>
          <li>Mot de passe moyen (supérieur à 6 caractères / minuscules + majuscules / pas de caractères spéciaux)</li>
          <li>Mot de passe fort (supérieur à 6 caractères / minuscules + majuscules / caractères spéciaux)</li>
          </ul>
        </p>
      <Password />
      </div>
    );
  }
}

export default App;

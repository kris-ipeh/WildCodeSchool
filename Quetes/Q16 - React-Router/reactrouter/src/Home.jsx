import React, { Component } from 'react';
import { NavLink  } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" activeClassName="selected"> Accueil </NavLink>
        <NavLink to="/notre-histoire"> Notre histoire </NavLink>
        <h1>Bienvenue sur l'accueil</h1>
      </div>
    );
  }
}

export default Home;
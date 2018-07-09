import React, { Component } from 'react';
import { NavLink  } from 'react-router-dom';

class History extends Component {
  render() {
    return (
        <div>
        <NavLink to="/"> Accueil </NavLink>
        <NavLink to="/notre-histoire" activeClassName="selected"> Notre histoire </NavLink>
        <h1>History.jsx</h1>
      </div>
    );
  }
}

export default History;
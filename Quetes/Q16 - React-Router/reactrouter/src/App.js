import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Home';
import History from './History';

class App extends Component {
  render() {
      return (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/notre-histoire" component={History} />
            </Switch>
          </BrowserRouter>
      );
  }
}

export default App;

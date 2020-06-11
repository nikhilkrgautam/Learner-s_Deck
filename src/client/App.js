import React, { Component } from 'react';
import './app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './pages/components/navbar/Navbar';
import routes from './pages/routes';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          {
            routes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              )
            })
          }
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

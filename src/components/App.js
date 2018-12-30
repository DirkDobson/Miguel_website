import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Photos from './Photos'
import Videos from './Videos';
import {BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Body>
          <NavBar /> 
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/photos" component={Photos} />
              <Route exact path="/videos" compoent={Videos} />
              <Route component={NoMatch} />
            </Switch>
            </Body>
        </>
      </Router>
    );
  }
}

const Body = styled.div`
  background-color: #990000;
`

export default App;


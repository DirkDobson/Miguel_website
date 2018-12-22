import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class NoMatch extends Component {
  render() {
    return (
      <>
        <Body>
          <Header as="h1" textAlign="center">
            Page Not Found
            <Link to="/"> Home</Link>
          </Header>
        </Body>
      </>
    );
  }
}

const Body = styled.div`
 background-color: #990000;
`

export default NoMatch;


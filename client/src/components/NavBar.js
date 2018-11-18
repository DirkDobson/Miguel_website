import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props
  }


  render() {
    return (
      <Center>
          <Link to="/" >
            <P>Home</P>
          </Link>
          <Link to="/studio_work">
            <P>Studio Work</P>
          </Link>
          <Link to="/photos">
            <P>Photos</P>
          </Link>
          <Link to="/videos">
            <P>Videos</P>
          </Link>
          <Link to="music">
            <P>Music</P>
          </Link>
          <Link to="demos">
            <P>Demos</P>
          </Link>
          <Link to="/downloads">
            <P>Downloads</P>
          </Link>
          <Link to="contact">
            <P>Contact</P>
          </Link>
      </Center>
    );
  }
}

const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: blue;
  Height: 2.5em;
`
const P = styled.p`
font-size: 2em;
color: white;
padding-left 1em;
padding-right 1em;
`




const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));


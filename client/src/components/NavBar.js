import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props
  }


  render() {
    return (
      <Menu secondary color={'blue'} inverted >
        <Link to="/" >
          <Menu.Item name='Home' />
        </Link>
        <Link to="/studio_work">
          <Menu.Item name='Studio Work' />
        </Link>
        <Link to="/photos">
          <Menu.Item name='Photos' />
        </Link>
        <Link to="videos">
          <Menu.Item name='Videos' />
        </Link>
        <Link to="music">
          <Menu.Item name='Music' />
        </Link>
        <Link to="demos">
          <Menu.Item name='Demos' />
        </Link>
        <Link to="/downloads">
          <Menu.Item name='Downloads' />
        </Link>
        <Link to="contact">
          <Menu.Item name='Contact' />
        </Link>
      </Menu>
    );
  }
}



const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));


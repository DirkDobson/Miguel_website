import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import styled from 'styled-components'

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props
  }

  //   if (user.id) {
  //     return (
  //       <FMenu.FMenu position='right'>
  //         <FMenu.Item
  //           name='Logout'
  //           onClick={() => dispatch(handleLogout(history))}
  //         />
  //       </FMenu.FMenu>
  //     );
  //   }
  //   return (
  //     <FMenu.FMenu position="right">
  //       <Link to="/register">
  //         <FMenu.Item name="Register" />
  //       </Link>
  //       <Link to="/login">
  //         <FMenu.Item name="Login" />
  //       </Link>
  //     </FMenu.FMenu>
  //   );
  // }

  render() {
    return (
      <Place>
        <Menu secondary inverted >
          <Link to="/home" >
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
      </Place>
    );
  }
}

const Place = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`



const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));


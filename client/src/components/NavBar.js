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
          <Menu.Item name='Home' />
          <Menu.Item name='Studio Work' />
          <Menu.Item name='Photos' />
          <Menu.Item name='Videos' />
          <Menu.Item name='Music' />
          <Menu.Item name='Demos' />
          <Menu.Item name='Downloads' />
          <Menu.Item name='Contact' />
        </Menu>
      </Place>
    );
  }
}

const Place = styled.div`
  display: flex;
  justify-content: center;
`



const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));


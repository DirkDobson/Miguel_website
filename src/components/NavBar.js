import React, { Component } from 'react';
import { 
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect fluid >
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/">
            Home
            </NavLink>
         </Navbar.Brand>
         <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
          <NavItem>
            <NavLink eventKey={1} to="/studio_work">
              Studio Work
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={2} to="/photos">
              Photos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink pullRight eventKey={3} to="/music">
              Music
            </NavLink>
          </NavItem>
          </Nav> 
        <Navbar.Text pullRight>Miguel</Navbar.Text>     
        </Navbar.Collapse>  
      </Navbar>
    );
  }
}

export default NavBar;


import React from 'react';
import { 
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fluid style={{marginBottom: '0px'}}>
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
            <NavLink eventKey={1} to="/photos">
              Photos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={2} to="/videos">
              Videos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink pullRight eventKey={3} to="/studio_work">
              Studio Work
            </NavLink>
          </NavItem>
          </Nav> 
          <Nav pullRight>
            <NavDropdown  pullright eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Downloads</MenuItem>
              <MenuItem eventKey={3.2}>What Ever</MenuItem>
              <MenuItem eventKey={3.3}>Other Page</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Lessons</MenuItem> 
            </NavDropdown>
          </Nav>  
          </Navbar.Collapse>  
        </Navbar>
    );
  }
}

export default NavBar;


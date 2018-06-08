import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="/">Portfolio</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                        <NavItem eventKey={1} href="/About">
                            About Me
                        </NavItem>
                        <NavItem eventKey={2} href="/Projects">
                            Projects
                        </NavItem>
                        <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Project 1</MenuItem>
                            <MenuItem eventKey={3.2}>Project 2</MenuItem>
                            <MenuItem eventKey={3.3}>Project 3</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Project 4</MenuItem>
                        </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                        <NavItem eventKey={1} href="/Contacts">
                            Contact
                        </NavItem>
                        <NavItem eventKey={2} href="/Hobbies">
                            Hobbies
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            </div>
        );
    }
}

export default NavBar;
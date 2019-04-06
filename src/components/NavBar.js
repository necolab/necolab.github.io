import React, { Component } from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';



const NCNavBar = styled(Navbar)`
  background: white !important;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
  height: 4.5rem;
`;

const NCBrand = styled(Navbar.Brand)`
  font-size: 1.5rem;
`;


export class NavigationBar extends Component {
  render() {
    return (
        <NCNavBar bg="light" expand="lg">
            <NCBrand href="#home">NECO</NCBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
              </Navbar.Collapse>
          </NCNavBar>
    );
  }
}

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const ContainerHeader = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">NbaStats</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Stats">Stats</Nav.Link>
            <Nav.Link href="#Averages">Averages</Nav.Link>
            <NavDropdown title="Players" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                    Specific Player
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    All Players
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Teams" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                    Specific Teams
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    All Teams
                </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Games" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                    Specific Games
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    All Games
                </NavDropdown.Item>
            </NavDropdown>                                   
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sing In</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sing Up
            </Nav.Link>
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default ContainerHeader
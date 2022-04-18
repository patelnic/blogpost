import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css'
import SearchBox from './SearchBox';

export default function NavigationWithBootstap({handleChange}) {
  const {isAuthenticated} = useAuth0();
  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Container>
        <Navbar.Collapse>
        <Nav className="ms-auto">
            <Nav.Item><SearchBox hint = 'Search all blogs' handleChange = {handleChange}/> </Nav.Item>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/createblog">Create Blog</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>            
            <Nav.Item>
                {isAuthenticated?<LogoutButton />:<LoginButton />}
            </Nav.Item>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

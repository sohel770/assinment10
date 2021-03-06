import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';




const Header = () => {
  const [user]=useAuthState(auth)

const handleSignOut = () => {
signOut(auth)
}


    return (
        <div>
          <Navbar collapseOnSelect  expand="lg"  bg="dark"  variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/home'>
      <h3>Strength <span className='text-primary'> Center</span> </h3>
  {/* <img src={logo} alt="" /> */}

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/home'>Home</Nav.Link>
      <Nav.Link as={Link} to='/services'>Services</Nav.Link>
      <Nav.Link as={Link} to='/experts'>Experts</Nav.Link>
      <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to='/about'>About</Nav.Link>
      {
        user ?
        <button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button>
        :
      
      <Nav.Link eventKey={2} as={Link} to='/login'>
       Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
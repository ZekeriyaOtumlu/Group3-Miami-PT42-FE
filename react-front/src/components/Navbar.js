import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './Navbar.css'



function NavbarComponent() {
  return (
    <div>
        <Container>
          <Navbar href="#home">
          <Nav className="me-auto">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/pricing'>Pricing</Link>
            <Link to='/Recipes'>Recipes</Link>
            <Link to='/SignIn'>Sign In</Link>
            <Link to='/SignUp'>Sign Up</Link>
          </Nav></Navbar>
        </Container>
      </div>
   
  );
}

export default NavbarComponent;
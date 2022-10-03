
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import '../App.css'



const NavbarExample = () => {

  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Navbar.Toggle className="ms-2 mb-2 mt-2"/>

        <Navbar.Collapse>
          <Container className="d-flex justify-content-center text-center">
            <Nav className=" text-center fw-bold ">
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/about'>About</Link></Nav.Link>
              <Nav.Link><Link to='/skills'>Skills</Link></Nav.Link>
              <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
            </Nav>

          </Container>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarExample;
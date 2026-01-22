import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <Navbar expand="lg" className="fixed-top bg-white border-bottom p-3 bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><HighlightIcon/>Personal Knowledge Vault</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>  
          </Nav>
          <Nav className='fixed-right'>
            <Nav.Link href='logout'>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
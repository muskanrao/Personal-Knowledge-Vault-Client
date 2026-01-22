import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderNav() {
  return (
    <>
      <Navbar className='bg-white navbar navbar-expand-lg navbar-light'  bg="light" data-bs-theme="light">
        <div className='container-fluid'>
          <Nav className="me-auto" style={{marginLeft: "300px"}}>
            <Nav.Link style={{marginRight:"50px"}} href="#notes">Notes</Nav.Link>
            <Nav.Link style={{marginRight:"50px"}} href="#links">Links</Nav.Link>
            <Nav.Link style={{marginRight:"50px"}} href="#snippets">Snippets</Nav.Link>
            <Nav.Link style={{marginRight:"50px"}} href="#ideas">Ideas</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
}

export default HeaderNav;
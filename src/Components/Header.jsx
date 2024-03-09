  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import NavDropdown from 'react-bootstrap/NavDropdown';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './Header.css'


  function Header() {
    return (
      <Navbar expand="lg" className="navbar">
        <Container>
          <div className='title' href="#home">FitFusion Elite</div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/exercise">Exercise</Nav.Link>
              <Nav.Link href="/tracker"> Tracker</Nav.Link>

              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                <NavDropdown.Item href="/subscription">
                  Subscription
                </NavDropdown.Item>
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default Header;
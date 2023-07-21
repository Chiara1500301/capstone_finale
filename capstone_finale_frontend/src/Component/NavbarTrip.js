import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Offcanvas, Container, Button, Row, Col, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import './NavbarTrip.css';

function NavbarTrip() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-trip">
        <Container>
          <Navbar.Brand as={Link} to="/" className="Titolo">EpicTravel</Navbar.Brand>
          <Form className="d-flex mx-auto">
            <FormControl type="text" placeholder="Search" className="me-2" />
            <Button className="buttonNav">Search</Button>
          </Form>
          <Button onClick={handleOffcanvasToggle} variant="outline-primary" className="buttonNav">Menu</Button>
        </Container>
      </Navbar>
      <Offcanvas
        show={showOffcanvas}
        onHide={handleOffcanvasToggle}
        placement="end"
        backdrop={false}
        className="offcanvas-expanded"
        style={{ width: '100vw', height: '100vh' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col>
                <Nav className="flex-column">
                  <Nav.Link as={Link} to="/LoginForm">Login</Nav.Link>
                  <Nav.Link as={Link} to="/RegistrationForm">Registrati</Nav.Link>
                  <Nav.Link as={Link} to="/Promotion">Promotions</Nav.Link>
                  <Nav.Link as={Link} to="/UpComingDepartures">Upcoming Departures</Nav.Link>
                </Nav>
              </Col>
              <Col>
                <Nav className="flex-column">
                  <Nav.Link href="#destinations">Destinations
                    <ListGroup defaultActiveKey="#link1">
                      <ListGroup.Item action href="#Marocco"><Link to="/Marocco">Marocco</Link></ListGroup.Item>
                      <ListGroup.Item action href="#Kenya"><Link to="/Kenya">Kenya</Link></ListGroup.Item>
                      <ListGroup.Item action href="#Tunisia"><Link to="/Tunisia">Tunisia</Link></ListGroup.Item>
                      <ListGroup.Item action href="#Brasile"><Link to="/Brasile">Brasile</Link></ListGroup.Item>
                      <ListGroup.Item action href="#Zanzibar"><Link to="/Zanzibar">Zanzibar</Link></ListGroup.Item>
                      <ListGroup.Item action href="#Maldive"><Link to="/Maldive">Maldive</Link></ListGroup.Item>
                      <ListGroup.Item action href="#Cuba"><Link to="/Cuba">Cuba</Link></ListGroup.Item>
                      <ListGroup.Item action href="#Egitto"><Link to="/Egitto">Egitto</Link></ListGroup.Item>
                      <ListGroup.Item action href="#Giordania"><Link to="/Giordania">Giordania</Link></ListGroup.Item>
                      <ListGroup.Item action href="#Grecia"><Link to="/Grecia">Grecia</Link></ListGroup.Item>
                      <ListGroup.Item action href="#Italia"><Link to="/Italia">Italia</Link></ListGroup.Item>
                      <ListGroup.Item action href="#Messico"><Link to="/Messico">Messico</Link></ListGroup.Item>
                      <ListGroup.Item action href="#RepubblicaDomenicana"><Link to="/RepubblicaDomenicana">Repubblica Domenicana</Link></ListGroup.Item>
                      <ListGroup.Item action href="#Spagna"><Link to="/Spagna">Spagna</Link></ListGroup.Item>
                      <ListGroup.Item action href="#Stati Uniti"><Link to="/Stati Uniti">Stati Uniti</Link></ListGroup.Item>
                    </ListGroup>
                  </Nav.Link>
                </Nav>
              </Col>
              <Col>
                <Nav className="flex-column">
                  <Nav.Link as={Link} to="/HelpCenter">Help Center</Nav.Link>
                  <Nav.Link as={Link} to="/LavoraConNoi">Lavora con noi</Nav.Link>
                  <Nav.Link as={Link} to="/Partner">Partner</Nav.Link>
                  <Nav.Link as={Link} to="/Contatti">Contatti</Nav.Link>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="social-icons">
                  <Nav.Link href="#instagram"><i className="fab fa-instagram"></i></Nav.Link>
                  <Nav.Link href="#facebook"><i className="fab fa-facebook"></i></Nav.Link>
                  <Nav.Link href="#tiktok"><i className="fab fa-tiktok"></i></Nav.Link>
                  <Nav.Link href="#telegram"><i className="fab fa-telegram"></i></Nav.Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavbarTrip;

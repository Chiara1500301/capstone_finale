import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import './HomePage.css';
import carosello1 from '../img/carosello1.jpg';
import carosello2 from '../img/carosello2.jpg';
import carosello3 from '../img/carosello3.jpg';
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <Container>
          <div className="homepage-header-content">
            <h1>Vivi viaggi unici al mondo</h1>
            <h4>E incontra nuovi amici</h4>
            <Button className="homepage-button" size="lg">
              Scopri tutti i viaggi
            </Button>
          </div>
        </Container>
      </header>

      <section className="homepage-search-section">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="search-bar">
                <input type="text" placeholder="Cerca destinazione" className="search-input" />
                <Button className="homepage-button">Cerca</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="homepage-inspire-section">
        <Container>
          <div className="homepage-inspire-content">
            <h2>Lasciati ispirare</h2>
            <p>Inizia a sognare la tua prossima meta</p>
          </div>
          <Row>
            <Col md={6}>
              <a href="#" className="homepage-card-link">
                <div className="homepage-card">
                  <h3>Vieni con noi in Marocco</h3>
                  <Button className="homepage-button"><Link to="/Marocco"className="Link-Card">Ci vediamo là</Link></Button>
                </div>
              </a>
            </Col>
            <Col md={6}>
              <a href="#" className="homepage-card-link">
                <div className="homepage-card2">
                  <h3>Andiamo a Zanzibar! </h3>
                  <Button className="homepage-button"><Link to="/Zanzibar"className="Link-Card">Approfittane</Link></Button>
                </div>
              </a>
            </Col>
            <Col md={6}>
              <a href="#" className="homepage-card-link">
                <div className="homepage-card3">
                  <h3>Partenze luglio e agosto</h3>
                  <Button className="homepage-button"><Link to="/Promotion"className="Link-Card">Stacca la spina</Link></Button>
                </div>
              </a>
            </Col>
            <Col md={6}>
              <a href="#" className="homepage-card-link">
                <div className="homepage-card4">
                  <h3>Estate 2023</h3>
                  <Button className="homepage-button"><Link to="/Promotion"className="Link-Card">Scegli la tua vacanza</Link></Button>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="homepage-carousel-section">
        <Container>
          <Row>
            <Col md={6} className="homepage-carousel-text">
              <h3>Noi abbiamo <br/> un viaggio per  <br/>ogni desiderio <br/> scegli il tuo <br/> e partiamo</h3>
            </Col>
            <Col md={6}>
              <Carousel className="homepage-carousel">
                <Carousel.Item>
                  <img className="carousel-image" src={carosello1} alt="EpicTravel Club" />
                  <Carousel.Caption>
                    <h5 className="carousel-text">EpicTravel Club: tutti i viaggiatori sotto lo stesso tetto, per incontrare nuovi amici e vivere al top la destinazione</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="carousel-image" src={carosello3} alt="Viaggi Blind" />
                  <Carousel.Caption>
                    <h5 className="carousel-text">Viaggi Blind: destinazioni da sogno , per chi cerca relax totale.</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="carousel-image" src={carosello2} alt="Viaggi Easy" />
                  <Carousel.Caption>
                    <h5 className="carousel-text">Viaggi Easy: esplorare e scoprire una meta non è mai stato così semplice e conveniente.</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default HomePage;

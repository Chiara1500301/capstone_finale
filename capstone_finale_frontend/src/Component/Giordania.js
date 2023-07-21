import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import './Destinazioni.css';
import GiordaniaImg from '../img/GiordaniaImg.jpg';
import GiordaniaImg2 from '../img/GiordaniaImg2.jpg';
import GiordaniaImg3 from '../img/GiordaniaImg3.jpg';
import { Link } from 'react-router-dom';

function Giordania({ id_destinazione }) {
  const prezzo = 899;

  return (
    <div>
      <NavbarTrip />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-center">Giordania</h1>
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={GiordaniaImg} alt="Prima immagine Giordania" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={GiordaniaImg2} alt="Seconda immagine Giordania" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={GiordaniaImg3} alt="Terza immagine Giordania" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="description">
              <h3>Incluso nel pacchetto:</h3>
              <ul>
                <li>8 notti in hotel a 4 stelle</li>
                <li>Trattamento: mezza pensione</li>
                <li>Assicurazione base</li>
                <li>Visite guidate ai siti archeologici e alle meraviglie naturali</li>
              </ul>
              <h3>Cosa non è incluso:</h3>
              <ul>
                <li>Il Volo (puoi aggiungerlo come extra nel carrello)</li>
                <li>Escursioni e attività opzionali</li>
                <li>Spese di viaggio e personali</li>
              </ul>
              <h3>Descrizione del viaggio:</h3>
              <p>La Giordania è una terra di straordinaria bellezza e ricca di storia. Potrai visitare la meraviglia del mondo antico, Petra, con i suoi maestosi templi scolpiti nella roccia e i colori unici del deserto. Potrai esplorare la capitale Amman, una città vibrante e moderna, ma con una ricca eredità storica. E non perderti il Mar Morto, dove potrai galleggiare grazie alla sua altissima salinità. La Giordania offre anche splendide opportunità di trekking e avventura nel deserto del Wadi Rum, con i suoi paesaggi spettacolari e un'atmosfera unica. Un viaggio in Giordania è un'esperienza indimenticabile, immersa in una cultura millenaria e in scenari naturali mozzafiato.</p>
            </div>
          </Col>
          <Col md={8}>
            <div className="sidebar">
              <h2>Prezzo</h2>
              <p>A partire da {prezzo}€</p>
              <Button variant="primary"><Link to={`/Prenotazione/${id_destinazione}/${prezzo}`}>Prenota ora</Link></Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Giordania;

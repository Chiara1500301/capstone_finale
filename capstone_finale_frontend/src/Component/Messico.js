import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import './Destinazioni.css';
import MessicoImg from '../img/MessicoImg.jpg';
import MessicoImg2 from '../img/MessicoImg2.jpg';
import MessicoImg3 from '../img/MessicoImg3.jpg';
import { Link } from 'react-router-dom';

function Messico({ id_destinazione }) {
  const prezzo = 899;

  return (
    <div>
      <NavbarTrip />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-center">Messico</h1>
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={MessicoImg} alt="Prima immagine Messico" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={MessicoImg2} alt="Seconda immagine Messico" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={MessicoImg3} alt="Terza immagine Messico" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="description">
              <h3>Incluso nel pacchetto:</h3>
              <ul>
                <li>7 notti in camera doppia, tripla</li>
                <li>Trattamento: all inclusive</li>
                <li>Assicurazione base</li>
                <li>Trasferimento andata/ritorno dall’aeroporto all’hotel per volo Neos (aeroporto La Romana)</li>
              </ul>
              <h3>Cosa non è incluso:</h3>
              <ul>
                <li>Il Volo (puoi aggiungerlo come extra nel carrello)</li>
                <li>Trasferimento andata/ritorno dall’aeroporto all’hotel</li>
                <li>Visto (ESTA) e Resort Fee</li>
              </ul>
              <h3>Descrizione del viaggio:</h3>
              <p>Il Messico è una terra di antiche civiltà, culture affascinanti, spiagge paradisiache e cibo delizioso. Da Chichen Itza alle spiagge della Riviera Maya, dalle vibranti città di Città del Messico e Cancun alle misteriose rovine maya di Tulum, il Messico offre una vasta gamma di esperienze per i viaggiatori. Goditi il sole e il mare, scopri la storia e la cultura e lasciati affascinare dalla bellezza di questa affascinante destinazione.</p>
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

export default Messico;

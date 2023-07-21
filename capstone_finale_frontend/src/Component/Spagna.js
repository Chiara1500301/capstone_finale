import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import './Destinazioni.css';
import SpagnaImg from '../img/SpagnaImg.jpg';
import SpagnaImg2 from '../img/SpagnaImg2.jpg';
import SpagnaImg3 from '../img/SpagnaImg3.jpg';
import { Link } from 'react-router-dom';

function Spagna({ id_destinazione }) {
  const prezzo = 599;

  return (
    <div>
      <NavbarTrip />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-center">Spagna</h1>
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={SpagnaImg} alt="Prima immagine Spagna" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={SpagnaImg2} alt="Seconda immagine Spagna" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={SpagnaImg3} alt="Terza immagine Spagna" />
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
              <p>Ami lo sport anche in vacanza? Coralejo è il posto ideale in cui improvvisarsi surfisti. A El Cofete ti sembrerà di essere atterrato su Marte e nella pop corn beach in un set cinematografico. El Cotillo e Las Escaleras, sono tra le chicche imperdibili di Fuerteventura. In qualunque periodo tu voglia partire, ricorda che alle Canarie fa sempre caldo!</p>
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

export default Spagna;

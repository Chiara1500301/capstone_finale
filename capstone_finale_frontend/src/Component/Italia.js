import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import './Destinazioni.css';
import CalabriaImg from '../img/CalabriaImg.jpg';
import CalabriaImg2 from '../img/CalabriaImg2.jpg';
import CalabriaImg3 from '../img/CalabriaImg3.jpg';
import { Link } from 'react-router-dom';

function Italia({ id_destinazione }) {
  const prezzo = 799;

  return (
    <div>
      <NavbarTrip />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-center">Italia</h1>
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={CalabriaImg} alt="Prima immagine Italia" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={CalabriaImg2} alt="Seconda immagine Italia" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={CalabriaImg3} alt="Terza immagine Italia" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="description">
              <h3>Incluso nel pacchetto:</h3>
              <ul>
                <li>5 notti in hotel 4 stelle</li>
                <li>Trattamento: prima colazione</li>
                <li>Assicurazione base</li>
                <li>Trasferimento andata/ritorno dall’aeroporto all’hotel</li>
              </ul>
              <h3>Cosa non è incluso:</h3>
              <ul>
                <li>Il Volo (puoi aggiungerlo come extra nel carrello)</li>
                <li>Spese di viaggio e personali</li>
                <li>Visite guidate e attività opzionali</li>
              </ul>
              <h3>Descrizione del viaggio:</h3>
              <p>L'Italia è una terra ricca di arte, cultura e storia. Con le sue città d'arte come Roma, Firenze, Venezia e Milano, offre un'esperienza unica tra antiche rovine, opere d'arte rinomate e architetture mozzafiato. Potrai visitare i famosi monumenti come il Colosseo, il Duomo di Milano, la Basilica di San Marco e il David di Michelangelo. Oltre alle città, l'Italia offre anche splendide coste, affascinanti laghi e paesaggi montuosi mozzafiato. Potrai gustare la deliziosa cucina italiana, famosa in tutto il mondo per le sue prelibatezze come la pasta, la pizza e il gelato. L'Italia è una destinazione perfetta per chi ama l'arte, la cultura e la buona cucina.</p>
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

export default Italia;

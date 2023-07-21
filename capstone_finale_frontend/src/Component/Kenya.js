import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import './Destinazioni.css';
import KenyaImg from '../img/KenyaImg.jpg';
import KenyaImg2 from '../img/KenyaImg2.jpg';
import KenyaImg3 from '../img/KenyaImg3.jpg';
import { Link } from 'react-router-dom';

function Kenya({ id_destinazione }) {
  const prezzo = 899;

  return (
    <div>
      <NavbarTrip />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-center">Kenya</h1>
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={KenyaImg} alt="Prima immagine Kenya" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={KenyaImg2} alt="Seconda immagine Kenya" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={KenyaImg3} alt="Terza immagine Kenya" />
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
              <p>Il Kenya è una terra di straordinaria bellezza naturale, con la sua vasta savana, le montagne imponenti e i laghi scintillanti. È famoso per i suoi parchi nazionali e riserve, dove è possibile avvistare una grande varietà di animali selvatici, tra cui elefanti, leoni, zebre e giraffe. Il Masai Mara è particolarmente noto per la grande migrazione degli gnu e delle zebre, uno spettacolo unico al mondo. Oltre alla fauna selvatica, il Kenya offre anche spiagge paradisiache lungo la costa dell'Oceano Indiano, dove è possibile rilassarsi e godersi il mare cristallino. È un'esperienza indimenticabile per gli amanti della natura e degli animali.</p>
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

export default Kenya;

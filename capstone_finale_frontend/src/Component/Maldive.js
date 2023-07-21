import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import './Destinazioni.css';
import MaldiveImg from '../img/MaldiveImg.jpg';
import MaldiveImg2 from '../img/MaldiveImg2.jpg';
import MaldiveImg3 from '../img/MaldiveImg3.jpg';
import { Link } from 'react-router-dom';

function Maldive({ id_destinazione }) {
  const prezzo = 1299;

  return (
    <div>
      <NavbarTrip />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-center">Maldive</h1>
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={MaldiveImg} alt="Prima immagine Maldive" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={MaldiveImg2} alt="Seconda immagine Maldive" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={MaldiveImg3} alt="Terza immagine Maldive" />
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
              <p>Le Maldive sono un arcipelago di isole coralline nel Mar dell'Indiano, famoso per le sue acque cristalline, le spiagge di sabbia bianca e i coloratissimi reef corallini. È un paradiso per gli amanti dello snorkeling e delle immersioni subacquee, con la possibilità di avvistare una vasta gamma di vita marina, inclusi squali e mante. Le Maldive offrono anche l'opportunità di rilassarsi su spiagge incontaminate, godersi il tramonto e immergersi nella cultura locale. È il luogo ideale per una vacanza di lusso e relax in un ambiente tropicale mozzafiato.</p>
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

export default Maldive;

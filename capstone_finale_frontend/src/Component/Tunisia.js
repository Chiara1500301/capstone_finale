import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import './Destinazioni.css';
import TunisiaImg from '../img/TunisiaImg.jpg';
import TunisiaImg2 from '../img/TunisiaImg2.jpg';
import TunisiaImg3 from '../img/TunisiaImg3.jpg';
import { Link } from 'react-router-dom';

function Tunisia({ id_destinazione }) {
  const prezzo = 499;

  return (
    <div>
      <NavbarTrip />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-center">Tunisia</h1>
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={TunisiaImg} alt="Prima immagine Tunisia" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={TunisiaImg2} alt="Seconda immagine Tunisia" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={TunisiaImg3} alt="Terza immagine Tunisia" />
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
              <p>La Tunisia è una destinazione ideale per scoprire una cultura affascinante e una storia millenaria. Potrai visitare antiche rovine romane, esplorare autentici mercati locali e goderti le spiagge lunghe e sabbiose. La Tunisia offre una varietà di esperienze, dalle città frenetiche piene di vita alle oasi tranquille nel deserto. Un viaggio in Tunisia è una combinazione perfetta tra cultura, avventura e relax.</p>
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

export default Tunisia;

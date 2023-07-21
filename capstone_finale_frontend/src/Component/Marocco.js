import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import './Destinazioni.css';
import MaroccoImg from '../img/MaroccoImg.jpg';
import MaroccoImg2 from '../img/MaroccoImg2.jpg';
import MaroccoImg3 from '../img/MaroccoImg3.jpg';
import { Link } from 'react-router-dom';

function Marocco({ id_destinazione }) {
  const prezzo = 699;

  return (
    <div>
      <NavbarTrip />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-center">Marocco</h1>
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={MaroccoImg} alt="Prima immagine Marocco" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={MaroccoImg2} alt="Seconda immagine Marocco" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={MaroccoImg3} alt="Terza immagine Marocco" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="description">
              <h3>Incluso nel pacchetto:</h3>
              <ul>
                <li>7 notti in camera doppia, tripla</li>
                <li>Trattamento: mezza pensione</li>
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
              <p>Il Marocco è una terra ricca di cultura, storia e bellezze naturali. Con le sue città imperiali come Marrakech, Fes e Rabat, offre un'esperienza unica tra mercati affollati, antichi palazzi e strade acciottolate. Potrai scoprire l'atmosfera magica delle medine e perdersi nei souk, dove troverai oggetti artigianali unici. Oltre alle città, il Marocco offre anche paesaggi mozzafiato, come le dune del deserto del Sahara e le catene montuose dell'Atlante. Potrai visitare antiche rovine romane, oasi incantate e affascinanti villaggi berberi. Il Marocco è una destinazione perfetta per chi ama l'avventura, la cultura e il fascino del Nord Africa.</p>
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

export default Marocco;

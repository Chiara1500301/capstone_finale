import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import './Destinazioni.css';
import StatiUnitiImg from '../img/StatiUnitiImg.jpg';
import StatiUnitiImg2 from '../img/StatiUnitiImg2.jpg';
import StatiUnitiImg3 from '../img/StatiUnitiImg3.jpg';
import { Link } from 'react-router-dom';

function StatiUniti({ id_destinazione }) {
  const prezzo = 1299;

  return (
    <div>
      <NavbarTrip />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-center">Stati Uniti</h1>
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={StatiUnitiImg} alt="Prima immagine Stati Uniti" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={StatiUnitiImg2} alt="Seconda immagine Stati Uniti" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={StatiUnitiImg3} alt="Terza immagine Stati Uniti" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="description">
              <h3>Incluso nel pacchetto:</h3>
              <ul>
                <li>10 notti in hotel a scelta</li>
                <li>Trattamento: pernottamento e prima colazione</li>
                <li>Assicurazione base</li>
                <li>Biglietti per attrazioni selezionate</li>
              </ul>
              <h3>Cosa non è incluso:</h3>
              <ul>
                <li>Il Volo (puoi aggiungerlo come extra nel carrello)</li>
                <li>Pasti non specificati</li>
                <li>Escursioni e attività opzionali</li>
                <li>Spese di viaggio e personali</li>
              </ul>
              <h3>Descrizione del viaggio:</h3>
              <p>Gli Stati Uniti offrono una varietà infinita di esperienze e destinazioni. Potrai esplorare le vibranti città come New York, Los Angeles e Miami, immergendoti nella cultura, nell'arte e nel divertimento che queste metropoli hanno da offrire. Potrai visitare i parchi nazionali e ammirare la maestosità di paesaggi come il Grand Canyon e Yellowstone. Potrai scoprire le spiagge spettacolari della Florida e della California o avventurarti nei grandi spazi del Texas e del Midwest. Ogni regione degli Stati Uniti ha qualcosa di unico da offrire, dalle vivaci strade di New Orleans alla tranquilla bellezza delle Montagne Rocciose. Un viaggio negli Stati Uniti è un'esperienza indimenticabile, che ti lascerà ricordi indelebili e un desiderio di tornare ancora e ancora.</p>
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

export default StatiUniti;

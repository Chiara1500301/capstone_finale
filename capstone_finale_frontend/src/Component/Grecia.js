import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import './Destinazioni.css';
import GreciaImg from '../img/GreciaImg.jpg';
import GreciaImg2 from '../img/GreciaImg2.jpg';
import GreciaImg3 from '../img/GreciaImg3.jpg';
import { Link } from 'react-router-dom';

function Grecia({ id_destinazione }) {
  const prezzo = 899;

  return (
    <div>
      <NavbarTrip />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-center">Grecia</h1>
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={GreciaImg} alt="Prima immagine Grecia" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={GreciaImg2} alt="Seconda immagine Grecia" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={GreciaImg3} alt="Terza immagine Grecia" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="description">
              <h3>Incluso nel pacchetto:</h3>
              <ul>
                <li>7 notti in hotel 4 stelle</li>
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
              <p>La Grecia è una destinazione affascinante e ricca di storia. Potrai visitare antichi siti archeologici come l'Acropoli di Atene, i templi di Delphi e il teatro di Epidauro. Le isole greche sono famose per le loro acque cristalline e le spiagge mozzafiato. Potrai rilassarti sulle spiagge di Mykonos, Santorini, Creta e molti altri paradisi del Mediterraneo. Inoltre, potrai gustare la deliziosa cucina greca con piatti come moussaka, souvlaki e baklava. La Grecia è una destinazione ideale per chi ama la storia, la cultura e la bellezza naturale.</p>
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

export default Grecia;

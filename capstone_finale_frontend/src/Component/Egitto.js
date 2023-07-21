import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import './Destinazioni.css';
import EgittoImg from '../img/EgittoImg.jpg';
import EgittoImg2 from '../img/EgittoImg2.jpg';
import EgittoImg3 from '../img/EgittoImg3.jpg';
import { Link } from 'react-router-dom';

function Egitto({ id_destinazione }) {
  const prezzo = 799;

  return (
    <div>
      <NavbarTrip />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-center">Egitto</h1>
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={EgittoImg} alt="Prima immagine Egitto" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={EgittoImg2} alt="Seconda immagine Egitto" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={EgittoImg3} alt="Terza immagine Egitto" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="description">
              <h3>Incluso nel pacchetto:</h3>
              <ul>
                <li>8 notti in hotel a 4 stelle</li>
                <li>Trattamento: mezza pensione</li>
                <li>Assicurazione base</li>
                <li>Visite guidate ai siti archeologici</li>
              </ul>
              <h3>Cosa non è incluso:</h3>
              <ul>
                <li>Il Volo (puoi aggiungerlo come extra nel carrello)</li>
                <li>Escursioni e attività opzionali</li>
                <li>Spese di viaggio e personali</li>
              </ul>
              <h3>Descrizione del viaggio:</h3>
              <p>L'Egitto è una terra ricca di storia e cultura, con incredibili siti archeologici, piramidi misteriose e imponenti templi. Potrai esplorare le meraviglie di Cairo, tra cui il famoso Museo Egizio e le Piramidi di Giza, che sono state per millenni uno dei punti di riferimento più iconici del mondo. Visiterai anche Luxor, dove potrai ammirare i templi di Karnak e di Luxor. Lungo il Nilo, potrai fare una crociera in barca tradizionale per scoprire i segreti dell'antico Egitto. Un viaggio in Egitto è un'esperienza unica che ti porterà indietro nel tempo, alla scoperta di una delle civiltà più antiche del mondo.</p>
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

export default Egitto;

import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import './Destinazioni.css';
import ZanzibarImg from '../img/ZanzibarImg.jpg';
import ZanzibarImg2 from '../img/ZanzibarImg2.jpg';
import ZanzibarImg3 from '../img/ZanzibarImg3.jpg';
import { Link } from 'react-router-dom';

function Zanzibar({ id_destinazione }) {
  const prezzo = 899;

  return (
    <div>
      <NavbarTrip />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-center">Zanzibar</h1>
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={ZanzibarImg} alt="Prima immagine Zanzibar" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={ZanzibarImg2} alt="Seconda immagine Zanzibar" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={ZanzibarImg3} alt="Terza immagine Zanzibar" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="description">
              <h3>Incluso nel pacchetto:</h3>
              <ul>
                <li>7 notti in hotel di lusso sulla spiaggia</li>
                <li>Trattamento: pensione completa</li>
                <li>Assicurazione base</li>
                <li>Trasferimento andata/ritorno dall’aeroporto all’hotel</li>
              </ul>
              <h3>Cosa non è incluso:</h3>
              <ul>
                <li>Il Volo (puoi aggiungerlo come extra nel carrello)</li>
                <li>Escursioni e attività opzionali</li>
                <li>Spese di viaggio e personali</li>
              </ul>
              <h3>Descrizione del viaggio:</h3>
              <p>Zanzibar è un paradiso tropicale situato al largo della costa della Tanzania. Con le sue spiagge di sabbia bianca, acque cristalline e ricca cultura swahili, Zanzibar è una destinazione da sogno per i viaggiatori in cerca di relax e avventura. Potrai esplorare le affascinanti strade di pietra di Stone Town, dichiarata patrimonio dell'umanità dall'UNESCO, e scoprire i mercati locali pieni di spezie e prodotti artigianali. Potrai fare snorkeling o immersioni subacquee per ammirare la vita marina colorata e fare escursioni alle isole circostanti. Con il suo mix di bellezze naturali e cultura affascinante, Zanzibar offre un'esperienza unica nel cuore dell'Oceano Indiano.</p>
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

export default Zanzibar;

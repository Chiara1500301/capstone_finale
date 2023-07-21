import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import './Destinazioni.css';
import RepubblicaDomenicanaImg from '../img/RepubblicaDomenicanaImg.jpg';
import RepubblicaDomenicanaImg2 from '../img/RepubblicaDomenicanaImg2.jpg';
import RepubblicaDomenicanaImg3 from '../img/RepubblicaDomenicanaImg3.jpg';
import { Link } from 'react-router-dom';

function RepubblicaDomenicana({ id_destinazione }) {
  const prezzo = 799;

  return (
    <div>
      <NavbarTrip />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-center">Repubblica Dominicana</h1>
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={RepubblicaDomenicanaImg} alt="Prima immagine Repubblica Dominicana" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={RepubblicaDomenicanaImg2} alt="Seconda immagine Repubblica Dominicana" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={RepubblicaDomenicanaImg3} alt="Terza immagine Repubblica Dominicana" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="description">
              <h3>Incluso nel pacchetto:</h3>
              <ul>
                <li>7 notti in hotel 5 stelle sulla spiaggia</li>
                <li>Trattamento: all inclusive</li>
                <li>Assicurazione base</li>
                <li>Trasferimento andata/ritorno dall’aeroporto all’hotel</li>
              </ul>
              <h3>Cosa non è incluso:</h3>
              <ul>
                <li>Il Volo (puoi aggiungerlo come extra nel carrello)</li>
                <li>Spese di viaggio e personali</li>
                <li>Escursioni e attività opzionali</li>
              </ul>
              <h3>Descrizione del viaggio:</h3>
              <p>La Repubblica Dominicana è una delle destinazioni più popolari dei Caraibi, con le sue spiagge bianche, acque turchesi e clima tropicale. Potrai rilassarti sulle spiagge paradisiache di Punta Cana, Bavaro e Puerto Plata. Avrai l'opportunità di esplorare la ricca cultura dominicana visitando le città coloniali di Santo Domingo e Puerto Plata. Potrai anche fare escursioni nella giungla per scoprire cascate nascoste e fare snorkeling per ammirare i meravigliosi fondali marini. Con la sua combinazione di bellezze naturali, avventura e relax, la Repubblica Dominicana offre un'esperienza indimenticabile per ogni tipo di viaggiatore.</p>
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

export default RepubblicaDomenicana;

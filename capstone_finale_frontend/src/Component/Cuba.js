import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import './Destinazioni.css';
import CubaImg from '../img/CubaImg.jpg';
import CubaImg2 from '../img/CubaImg2.jpg';
import CubaImg3 from '../img/CubaImg3.jpg';
import { Link } from 'react-router-dom';

function Cuba({ id_destinazione }) {
  const prezzo = 799;

  return (
    <div>
      <NavbarTrip />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-center">Cuba</h1>
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={CubaImg} alt="Prima immagine Cuba" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={CubaImg2} alt="Seconda immagine Cuba" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={CubaImg3} alt="Terza immagine Cuba" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="description">
              <h3>Incluso nel pacchetto:</h3>
              <ul>
                <li>7 notti in resort di lusso sulla spiaggia</li>
                <li>Trattamento: all inclusive</li>
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
              <p>Cuba è una delle destinazioni più affascinanti dei Caraibi, con le sue spiagge di sabbia bianca, le acque turchesi e la ricca cultura cubana. Potrai esplorare la vibrante città di L'Avana, con i suoi edifici colorati, le strade piene di musica e balli di salsa, e i famosi sigari cubani. Oppure potrai rilassarti sulle spiagge di Varadero, con la sua lunga distesa di sabbia bianca e le acque calme e trasparenti. Potrai anche scoprire la storia e la cultura di Cuba visitando siti storici come Trinidad e Cienfuegos. Con la sua bellezza naturale e la sua cultura unica, Cuba offre un'esperienza indimenticabile per i viaggiatori di tutte le età.</p>
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

export default Cuba;

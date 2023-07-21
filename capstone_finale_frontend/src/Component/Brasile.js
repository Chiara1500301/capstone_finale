import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import './Destinazioni.css';
import BrasileImg from '../img/BrasileImg.jpg';
import BrasileImg2 from '../img/BrasileImg2.jpg';
import BrasileImg3 from '../img/BrasileImg3.jpg';
import { Link } from 'react-router-dom';

function Brasile({ id_destinazione }) {
  const prezzo = 999;

  return (
    <div>
      <NavbarTrip />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text-center">Brasile</h1>
            <div className="carousel-container">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={BrasileImg} alt="Prima immagine Brasile" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={BrasileImg2} alt="Seconda immagine Brasile" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={BrasileImg3} alt="Terza immagine Brasile" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="description">
              <h3>Incluso nel pacchetto:</h3>
              <ul>
                <li>10 notti in hotel a 4 stelle</li>
                <li>Trattamento: colazione inclusa</li>
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
              <p>Il Brasile è una destinazione straordinaria con una vasta gamma di attrazioni. Potrai esplorare la vibrante città di Rio de Janeiro, con la sua famosa spiaggia di Copacabana, il Cristo Redentore e i ritmi coinvolgenti della samba. Oppure potrai scoprire l'Amazzonia, la più grande foresta pluviale del mondo, con la sua flora e fauna uniche. Potrai anche rilassarti sulle spiagge paradisiache di Florianopolis o immergerti nella cultura afro-brasiliana di Salvador. Con la sua ricca cultura, la sua musica coinvolgente e la sua bellezza naturale, il Brasile offre un'esperienza indimenticabile per i viaggiatori di tutte le età.</p>
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

export default Brasile;

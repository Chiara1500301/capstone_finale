import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div>
              <h4>Sezione contattaci</h4>
              <ul className="footer-list">
                <li>
                  <a href="/whatsapp">Scrivici su Whatsapp</a>
                </li>
                <li>
                  <a href="/prenota-chiamata">Prenota una chiamata</a>
                </li>
                <li>
                  <Link to="/HelpCenter">Help Center</Link>
                </li>
                <li>
                  <Link to="/LavoraConNoi">Lavora con noi</Link>
                </li>
                <li>
                  <a href="/iscrizione-agenzie">Iscrizione agenzie</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <h4>About Us</h4>
              <ul className="footer-list">
                <li>
                  <a href="/epic-travel">Il mondo EpicTravel</a>
                </li>
                <li>
                  <a href="/community">Community</a>
                </li>
                <li>
                  <a href="/nostri-valori">I nostri valori</a>
                </li>
                <li>
                  <a href="/societa-benefit">Società Benefit</a>
                </li>
                <li>
                  <Link to="/Partner">Partner</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <h4>Informazioni</h4>
              <ul className="footer-list">
                <li>
                  <a href="/TerminiCondizioni">Termini e Condizioni</a>
                </li>
                <li>
                  <a href="/Privacy">Privacy</a>
                </li>
                <li>
                  <a href="/CookiesPolicy">Cookie Policy</a>
                </li>
                <li>
                  <a href="/Assicurazioni">Assicurazioni</a>
                </li>
                <li>
                  <a href="/TueScelteCookies">Le tue scelte sui Cookie</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <h4>Iscriviti alla nostra NewsLetter</h4>
              <form>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <button type="submit" className="btn btn-subscribe">Iscriviti</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

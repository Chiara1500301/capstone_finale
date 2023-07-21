import React from 'react';
import './HelpCenter.css';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';

function HelpCenter() {
  return (
    <div>
        <NavbarTrip/>
    <div className="help-center">
      <h1 className="help-center-heading">Centro Assistenza</h1>
      <div className="help-center-content">
        <div className="help-section">
          <h2 className="help-section-heading">Domande Frequenti</h2>
          <ul className="help-section-list">
            <li>Come posso effettuare una prenotazione?</li>
            <li>Quali sono le politiche di cancellazione?</li>
            <li>Come posso contattare il servizio clienti?</li>
            <li>Posso modificare la mia prenotazione?</li>
          </ul>
        </div>
        <div className="help-section">
          <h2 className="help-section-heading">Contattaci</h2>
          <p className="help-section-description">
            Se hai ulteriori domande o hai bisogno di assistenza, non esitare a contattare il nostro servizio clienti.
          </p>
          <button className="help-section-button">Contatta il Supporto</button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default HelpCenter;

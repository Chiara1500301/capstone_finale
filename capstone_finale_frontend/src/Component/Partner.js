import React from 'react';
import './Partner.css';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';

function Partner() {
  return (
    <div>
      <NavbarTrip />
      <div className="partner">
        <div className="partner-content">
          <h1 className="partner-heading">Diventa nostro partner</h1>
          <p className="partner-description">
            Siamo sempre aperti a nuove collaborazioni e partnership con aziende nel settore del turismo.
            Se sei interessato a lavorare con noi e a offrire ai nostri clienti esperienze di viaggio uniche,
            contattaci e saremo felici di discutere le possibilità di collaborazione.
          </p>
          <button className="partner-button">Contattaci</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Partner;

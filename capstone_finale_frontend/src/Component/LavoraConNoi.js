import React from 'react';
import './LavoraConNoi.css';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';

function LavoraConNoi() {
  return (
    <div>
      <NavbarTrip />
      <div className="lavora-con-noi">
        <div className="lavora-con-noi-content">
          <h1 className="lavora-con-noi-heading">Lavora con noi</h1>
          <p className="lavora-con-noi-description">
            Siamo sempre alla ricerca di persone appassionate e talentuose per unirsi al nostro team.
            Se vuoi far parte di una grande squadra e contribuire a creare esperienze di viaggio uniche,
            inviaci il tuo curriculum vitae e saremo lieti di valutare la tua candidatura.
          </p>
          <button className="lavora-con-noi-button">Invia il tuo CV</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LavoraConNoi;

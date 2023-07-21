import React from 'react';
import './Contatti.css';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';

function Contatti() {
  return (
    <div>
        <NavbarTrip/>
    <div className="contatti">
      <div className="contatti-content">
        <h2 className="contatti-heading">Contatti</h2>
        <p className="contatti-description">
          Siamo qui per te! Se hai bisogno di assistenza, informazioni o hai domande sui nostri servizi, non esitare a contattarci.
        </p>
        <div className="contatti-info">
          <div className="contatti-info-item">
            <i className="fa fa-phone"></i>
            <p>+1234567890</p>
          </div>
          <div className="contatti-info-item">
            <i className="fa fa-envelope"></i>
            <p>info@utravel.com</p>
          </div>
          <div className="contatti-info-item">
            <i className="fa fa-map-marker"></i>
            <p>Via delle Vacanze 123, Città, Paese</p>
          </div>
        </div>
        <button className="contatti-button">Contattaci</button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Contatti;

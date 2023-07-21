import React from 'react';
import './UpComingDepartures.css';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import PARTENZE from '../img/PARTENZE.jpg'
import PARTENZE1 from '../img/PARTENZE1.jpg'
import { Link } from 'react-router-dom';
//import { text } from '@fortawesome/fontawesome-svg-core';
function UpcomingDepartures() {
  return (
    <div>
      <NavbarTrip />
      <div className="upcoming-departures">
        <h1 className="upcoming-departures-heading">Prossime Partenze</h1>
        <div className="upcoming-departures-content">
          <div className="departure-card">
            <img src={PARTENZE1} alt="Partenza 1" className="departure-card-image" />
            <div className="departure-card-details">
              <h2 className="departure-card-title">Vieni con noi a Kos</h2>
              <p className="departure-card-description">Kos,estate 2023.</p>
              <button className="departure-card-button"><Link to="/Grecia">Scopri di più</Link></button>
            </div>
          </div>
          <div className="departure-card">
            <img src={PARTENZE} alt="Partenza 2" className="departure-card-image" />
            <div className="departure-card-details">
              <h2 className="departure-card-title">Calabria arriviamo</h2>
              <p className="departure-card-description">Prossima rotto Scilla!</p>
              <button className="departure-card-button"> <Link to="/Italia">Scopri di più</Link></button>
            </div>
          </div>
          {/* Altre partenze */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UpcomingDepartures;

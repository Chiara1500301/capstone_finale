import React from 'react';
import './Promotion.css';
import NavbarTrip from './NavbarTrip';
import Footer from './Footer';
import card1 from '../img/card1.jpg'
import promozione2 from '../img/promozione2.jpg'
function Promotion() {
  return (
    <div>
      <NavbarTrip />
      <div className="promotions">
        <h1 className="promotions-heading">Promozioni</h1>
        <div className="promotions-content">
          <div className="promotion-card">
            <img src={card1} alt="Promozione 1" className="promotion-card-image" />
            <div className="promotion-card-details">
              <h2 className="promotion-card-title">Quando prenoti?</h2>
              <p className="promotion-card-description">Se prenoti le mete estive -100€</p>
              <button className="promotion-card-button">Scopri di più</button>
            </div>
          </div>
          <div className="promotion-card">
            <img src={promozione2} alt="Promozione 2" className="promotion-card-image" />
            <div className="promotion-card-details">
              <h2 className="promotion-card-title">Per quanti prenoti?</h2>
              <p className="promotion-card-description">Prenoti per 2 -100€</p>
              <button className="promotion-card-button">Scopri di più</button>
            </div>
          </div>
          {/* Altre promozioni */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Promotion;

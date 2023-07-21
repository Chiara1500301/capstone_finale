import NavbarTrip from "./Component/NavbarTrip";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Component/HomePage";
import Footer from "./Component/Footer";
import Marocco from "./Component/Marocco";
import Brasile from "./Component/Brasile";
import Cuba from "./Component/Cuba";
import Egitto from "./Component/Egitto";
import Giordania from "./Component/Giordania";
import Grecia from "./Component/Grecia";
import Italia from "./Component/Italia";
import Kenya from "./Component/Kenya";
import Maldive from "./Component/Maldive";
import Messico from "./Component/Messico";
import RepubblicaDomenicana from "./Component/RepubblicaDomenicana";
import Spagna from "./Component/Spagna";
import StatiUniti from "./Component/StatiUniti";
import Tunisia from "./Component/Tunisia";
import Zanzibar from "./Component/Zanzibar";
import HelpCenter from "./Component/HelpCenter";
import Contatti from "./Component/Contatti";
import LavoraConNoi from "./Component/LavoraConNoi";
import Partner from "./Component/Partner";
import LoginForm from "./Component/LoginForm";
import RegistrationForm from "./Component/RegistrationForm";
import Promotion from "./Component/Promotion";
import UpcomingDepartures from "./Component/UpComingDepartures";
import TerminiCondizioni from "./Component/TerminiCondizioni";
import Assicurazioni from "./Component/Assicurazioni";
import Privacy from "./Component/Privacy";
import CookiesPolicy from "./Component/CookiesPolicy";
import TueScelteCookies from "./Component/TueScelteCookies";
import Prenotazioni from "./Component/Prenotazione";
import Pagamento from "./Component/Pagamento";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<React.Fragment><NavbarTrip /><HomePage /><Footer /></React.Fragment>} />
        <Route path="/Marocco" element={<Marocco id_destinazione={1}/>}/>
        <Route path="/Kenya" element={<Kenya id_destinazione={2}/>}/>
        <Route path="/Tunisia" element={<Tunisia id_destinazione={3}/>}/>
        <Route path="/Brasile" element={<Brasile id_destinazione={4}/>}/>
        <Route path="/Zanzibar" element={<Zanzibar id_destinazione={5}/>}/>
        <Route path="/Maldive" element={<Maldive id_destinazione={6}/>}/>
        <Route path="/Cuba" element={<Cuba id_destinazione={7}/>}/>
        <Route path="/Egitto" element={<Egitto id_destinazione={8}/>}/>
        <Route path="/Giordania" element={<Giordania id_destinazione={9}/>}/>
        <Route path="/Grecia" element={<Grecia id_destinazione={10}/>}/>
        <Route path="/Italia" element={<Italia id_destinazione={11}/>}/>
        <Route path="/Messico" element={<Messico id_destinazione={12}/>}/>
        <Route path="/RepubblicaDomenicana" element={<RepubblicaDomenicana id_destinazione={13}/>}/>
        <Route path="Spagna" element={<Spagna id_destinazione={14}/>}/>
        <Route path="/Stati Uniti" element={<StatiUniti id_destinazione={15}/>}/>
        <Route path="/HelpCenter" element={<HelpCenter/>}/>
        <Route path="/Contatti" element={<Contatti/>}/>
        <Route path="/LavoraConNoi" element={<LavoraConNoi/>}/>
        <Route path="/Partner" element={<Partner/>}/>
        <Route path="/LoginForm" element={<LoginForm/>}/>
        <Route path="/RegistrationForm" element={<RegistrationForm/>}/>
        <Route path="/Promotion" element={<Promotion/>}/>
        <Route path="/UpComingDepartures" element={<UpcomingDepartures/>}/>
        <Route path="/TerminiCondizioni" element={<TerminiCondizioni/>}/>
        <Route path="/Assicurazioni" element={<Assicurazioni/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/CookiesPolicy" element={<CookiesPolicy/>}/>
        <Route path="/TueScelteCookies" element={<TueScelteCookies/>}/>
        <Route path="/Prenotazione/:id/:prezzo" element={<Prenotazioni/>}/>
        <Route path="/Pagamento" element={<Pagamento/>}/>

      </Routes>
    </Router>
  );
}


export default App;

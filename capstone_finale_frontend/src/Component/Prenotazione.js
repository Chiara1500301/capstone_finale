import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Prenotazioni.css';

const Prenotazione = () => {
  const [costoTotale, setCostoTotale] = useState(0);
  const [dataInizio, setDataInizio] = useState(new Date());
  const [dataFine, setDataFine] = useState(new Date());
  const [numViaggiatori, setNumViaggiatori] = useState(1);
  const [idDestinazione, setIdDestinazione] = useState('');
  const [idUtente, setIdUtente] = useState('');
  const [prezzoDestinazione, setPrezzoDestinazione] = useState(0);
  const [prenotazioneEffettuata, setPrenotazioneEffettuata] = useState(false);

  // Ottieni i parametri dall'URL (id e prezzo)
  const { id, prezzo } = useParams();
  const navigate = useNavigate();

  // Imposta il prezzo della destinazione utilizzando il valore ricevuto dall'URL
  useEffect(() => {
    setPrezzoDestinazione(Number(prezzo));
  }, [prezzo]);

  // Calcola il costo totale includendo il prezzo della destinazione
  const costoTotaleConDestinazione = costoTotale + prezzoDestinazione;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const prenotazione = {
        costo_totale: costoTotaleConDestinazione, // Utilizziamo il costo totale con il prezzo della destinazione incluso
        data_inizio: dataInizio,
        data_fine: dataFine,
        numero_persone: numViaggiatori,
        id_destinazione: idDestinazione,
        id_utente: idUtente,
      };

      const response = await fetch('http://localhost:8080/prenotazioni', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJmLm5lcmlAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODk3ODMyNTksImV4cCI6MTY5MDY0NzI1OX0.4AprfxwTCmkDUjFOyzQy9tMhqqNggOHZj_eaUxHH_Mof8gQ1FkQHavsh3nanTY5T' // Sostituisci con il tuo token JWT valido
        },
        body: JSON.stringify(prenotazione)
      });

      if (response.ok) {
        // Prenotazione avvenuta con successo, fai qualcosa con la risposta o reindirizza a una pagina di conferma
        console.log('Prenotazione avvenuta con successo!');
        setPrenotazioneEffettuata(true);
      } else {
        // Errore durante la prenotazione
        console.error('Errore durante la prenotazione:', response.statusText);
      }
    } catch (error) {
      console.error('Si è verificato un errore durante la richiesta:', error);
    }
  };

  // Se la prenotazione è avvenuta con successo, reindirizza l'utente alla pagina di pagamento
  if (prenotazioneEffettuata) {
    navigate('/Pagamento');
  }

  return (
    <div className="prenotazione-container">
      <h1>Prenotazioni</h1>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="form-container">
            <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Costo Totale:</Form.Label>
                <Form.Control type="number" value={costoTotaleConDestinazione} onChange={(e) => setCostoTotale(Number(e.target.value))} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Data Inizio:</Form.Label>
                <Form.Control type="date" value={dataInizio.toISOString().split('T')[0]} onChange={(e) => setDataInizio(new Date(e.target.value))} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Data Fine:</Form.Label>
                <Form.Control type="date" value={dataFine.toISOString().split('T')[0]} onChange={(e) => setDataFine(new Date(e.target.value))} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Numero Viaggiatori:</Form.Label>
                <Form.Control type="number" value={numViaggiatori} onChange={(e) => setNumViaggiatori(Number(e.target.value))} />
              </Form.Group>
              <Form.Group>
                <Form.Label>ID Destinazione:</Form.Label>
                <Form.Control type="text" value={id} onChange={(e) => setIdDestinazione(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>ID Utente:</Form.Label>
                <Form.Control type="text" value={idUtente} onChange={(e) => setIdUtente(e.target.value)} />
              </Form.Group>
              <Button className="mt-3 prenota-button" style={{ backgroundColor: 'rgb(13, 13, 40)' }} type="submit">Effettua Prenotazione</Button>            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Prenotazione;

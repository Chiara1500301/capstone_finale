import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importa il hook useNavigate
import './Pagamento.css';

const Pagamento = () => {
  const navigate = useNavigate(); // Usa il hook useNavigate per ottenere la funzione di navigazione

  const handlePayment = () => {
    // Simula il pagamento con un messaggio di successo
    alert('Pagamento avvenuto con successo!');
    navigate('/'); // Reindirizza l'utente alla home dopo il pagamento
  };

  return (
    <div className="pagamento-container">
      <h1>Pagamento</h1>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="form-container">
          <Form>
              <Form.Group>
                <Form.Label>Nome sulla Carta:</Form.Label>
                <Form.Control type="text" placeholder="Inserisci il nome sulla carta" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Numero Carta:</Form.Label>
                <Form.Control type="text" placeholder="Inserisci il numero della tua carta" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Scadenza carta:</Form.Label>
                <Form.Control type="text" placeholder="MM/AA" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Codice di Sicurezza:</Form.Label>
                <Form.Control type="text" placeholder="CVV" />
              </Form.Group>
              <Button className="mt-3 paga-button" style={{ backgroundColor: 'rgb(13, 13, 40)' }} onClick={handlePayment}>
                Paga Adesso
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pagamento;

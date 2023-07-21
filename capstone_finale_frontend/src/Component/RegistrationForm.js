import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !username || !email || !password) {
      setErrorMessage('Si prega di compilare tutti i campi.');
      return;
    }

    try {
      const user = {
        name,
        username,
        email,
        password,
        roles: []
      };

      // Effettua la richiesta POST al backend per registrare l'utente
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        // Registrazione avvenuta con successo, reindirizza alla pagina di login
        navigate('/LoginForm');
      } else {
        // Errore durante la registrazione
        setErrorMessage('Si è verificato un errore durante la registrazione.');
      }
    } catch (error) {
      console.error('Si è verificato un errore durante la richiesta:', error);
      setErrorMessage('Si è verificato un errore durante la registrazione.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2 className="registration-form-heading">Registrazione</h2>
      {errorMessage && <p className="registration-form-error">{errorMessage}</p>}
      <div className="form-group">
        <label htmlFor="name" className="form-label">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="username" className="form-label">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" className="registration-form-button">Registrati</button>
    </form>
  );
};

export default RegistrationForm;

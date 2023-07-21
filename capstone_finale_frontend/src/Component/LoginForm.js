import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage('Si prega di compilare tutti i campi.');
      return;
    }

    try {
      const user = {
        username,
        password,
      };

      // Effettua la richiesta POST al backend per effettuare il login
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        // Login riuscito, reindirizza alla home page
        navigate('/');
      } else {
        // Login fallito
        setErrorMessage('Credenziali non valide. Riprova.');
      }
    } catch (error) {
      console.error('Si è verificato un errore durante la richiesta:', error);
      setErrorMessage('Si è verificato un errore durante il login.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2 className="login-form-heading">Login</h2>
      {errorMessage && <p className="login-form-error">{errorMessage}</p>}
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
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" className="login-form-button">Accedi</button>
    </form>
  );
};

export default LoginForm;

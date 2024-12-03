import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/logosite.png'; // Certifique-se de que o caminho está correto

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simula a lógica de autenticação
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'teste@gmail.com' && password === '123') {
          resolve();
        } else {
          reject('Credenciais inválidas');
        }
      }, 1500);
    })
    .then(() => {
      navigate('/testemental');
    })
    .catch((error) => {
      setErrorMessage(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="login-container">
      <button className="help-button" aria-label="Ajuda" onClick={() => alert('Para ajuda, contacte suporte@neurotest.com')}>Ajuda</button>
      <img src={logo} alt="Logo NEUROTEST" className="user-icon" />
      <form className="login-form" onSubmit={handleSubmit} aria-label="Formulário de Login">
        <input
          type="email"
          placeholder="Email"
          className={`login-input ${errorMessage ? 'input-error' : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
        />
        <input
          type="password"
          placeholder="Senha"
          className={`login-input ${errorMessage ? 'input-error' : ''}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Senha"
        />
        <a href="/esqueci-senha" className="forgot-password-link" aria-label="Esqueci Minha Senha">Esqueceu a senha?</a>
        {isLoading && <div className="loader"></div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="login-button" aria-label="Entrar">Entrar</button>
      </form>
      <a href="/register" className="register-link" aria-label="Criar nova conta">Criar nova conta</a>
    </div>
  );
}

export default Login;

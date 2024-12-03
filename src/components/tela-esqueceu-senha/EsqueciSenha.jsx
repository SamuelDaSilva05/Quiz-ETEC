import React, { useState } from 'react';
import './EsqueciSenha.css';
import logo from '../../assets/logosite.png'; // Certifique-se de que o caminho está correto

const EsqueciSenha = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula o envio de email para redefinição de senha
    setTimeout(() => {
      setMessage('Se um usuário com esse e-mail for encontrado, um link para redefinir a senha será enviado.');
    }, 1000);
  };

  return (
    <div className="forgot-password-container">
      <img src={logo} alt="Logo NEUROTEST" className="user-icon" />
      <h1>Encontre sua conta</h1>
      <form className="forgot-password-form" onSubmit={handleSubmit} aria-label="Formulário de Redefinição de Senha">
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className="forgot-password-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
        />
        <button type="submit" className="forgot-password-button">Enviar</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
}

export default EsqueciSenha;

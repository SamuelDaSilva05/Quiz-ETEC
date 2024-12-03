// src/components/Register.jsx
import React from 'react';
import './Register.css'; // Certifique-se de criar um arquivo CSS para estilizar a tela
import logo from '../../assets/logosite.png';


const Register = () => {
  return (
    <div className="register-container">
      <img src={logo} alt="Logo NEUROTEST" className="user-icon"/>
      <form className="register-form">
        <input type="email" placeholder="EMAIL" className="register-input" />
        <input type="password" placeholder="SENHA" className="register-input" />
        <input type="password" placeholder="CONFIRMAR SENHA" className="register-input" />
        <button type="submit" className="register-button">CADASTRAR</button>
      </form>
    </div>
  );
}

export default Register;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../assets/logosite.png'; // Certifique-se de que o caminho está correto

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      <img src={logo} alt="Logo NEUROTEST" className="sidebar-logo" />
      <nav className="sidebar-nav">
        <ul>
          <li onClick={() => { navigate('/configuracoes'); toggleSidebar(); }}>Configurações</li>
          <li onClick={() => { navigate('/sobre'); toggleSidebar(); }}>Sobre</li>
          <li onClick={() => { navigate('/'); toggleSidebar(); }}>Logout</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

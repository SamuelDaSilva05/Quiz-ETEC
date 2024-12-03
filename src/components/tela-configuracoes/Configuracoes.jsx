import React, { useState, useEffect } from 'react';
import './Configuracoes.css';

const Configuracoes = () => {
  const [idioma, setIdioma] = useState('pt');
  const [tema, setTema] = useState('light');
  const [notificacoes, setNotificacoes] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
  }, [tema]);

  const handleIdiomaChange = (e) => setIdioma(e.target.value);
  const handleTemaChange = (e) => setTema(e.target.value);
  const handleNotificacoesChange = (e) => setNotificacoes(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de salvamento dos dados
    console.log({
      idioma,
      tema,
      notificacoes
    });
    alert('Configurações salvas com sucesso!');
  };

  return (
    <div className="configuracoes-container">
      <h1>Configurações</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="idioma">Idioma:</label>
          <select id="idioma" name="idioma" value={idioma} onChange={handleIdiomaChange}>
            <option value="pt">Português</option>
            <option value="en">Inglês</option>
            <option value="es">Espanhol</option>
            {/* Adicione mais opções de idioma conforme necessário */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tema">Tema:</label>
          <select id="tema" name="tema" value={tema} onChange={handleTemaChange}>
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
            {/* Adicione mais opções de tema conforme necessário */}
          </select>
        </div>
        <div className="form-group checkbox-group">
          <label htmlFor="notificacoes">Notificações:</label>
          <input type="checkbox" id="notificacoes" name="notificacoes" checked={notificacoes} onChange={handleNotificacoesChange} />
        </div>
        <button type="submit">Salvar Configurações</button>
      </form>
    </div>
  );
};

export default Configuracoes;

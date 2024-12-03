import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './TesteMental.css';
import Sidebar from '../sidebar/Sidebar';
import EstatisticasRapidas from '../estatisticas/EstatisticasRapidas';

const TesteMental = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [concluidos, setConcluidos] = useState(0); // Inicializando como 0
  const total = 5; // Total de testes disponíveis
  const navigate = useNavigate();
  const location = useLocation();

  // Atualizar os testes concluídos com base no estado recebido
  useEffect(() => {
    if (location.state?.concluido) {
      setConcluidos((prevConcluidos) => prevConcluidos + 1);
    }
  }, [location.state?.concluido]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTestClick = (path) => {
    navigate(path, { state: { concluido: true } });
  };

  const media = concluidos > 0 ? ((concluidos / total) * 100).toFixed(1) : 'N/A';

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`} onClick={() => setIsSidebarOpen(false)}>
        <header className="header">
          <button 
            className="hamburger-button" 
            onClick={(e) => { e.stopPropagation(); toggleSidebar(); }}
          >
            ☰
          </button>
          <h1 className="title">Teste Mental</h1>
        </header>
        <section id="intro-section" className="intro-section">
          <p className="description">
            Escolha um teste abaixo para começar. Cada teste ajudará você a entender melhor seu estado mental e fornecerá recomendações personalizadas.
          </p>
        </section>
        <section id="tests-section" className="tests-section">
          <h2 className="section-title">Testes Disponíveis</h2>
          <div className="buttons-container">
            <button className="test-button" onClick={() => handleTestClick('/perguntas/depressao')}>
              <span className="button-text">Depressão</span>
              <span className="start-text">Iniciar teste</span>
            </button>
            <button className="test-button" onClick={() => handleTestClick('/perguntas/ansiedade')}>
              <span className="button-text">Ansiedade</span>
              <span className="start-text">Iniciar teste</span>
            </button>
            <button className="test-button" onClick={() => handleTestClick('/perguntas/traumas')}>
              <span className="button-text">Traumas</span>
              <span className="start-text">Iniciar teste</span>
            </button>
            <button className="test-button" onClick={() => handleTestClick('/perguntas/estresse')}>
              <span className="button-text">Estresse</span>
              <span className="start-text">Iniciar teste</span>
            </button>
            <button className="test-button" onClick={() => handleTestClick('/perguntas/burnout')}>
              <span className="button-text">Burnout</span>
              <span className="start-text">Iniciar teste</span>
            </button>
          </div>
        </section>
        <section id="stats-section" className="stats-section">
          <div className="quick-stats">
            <h2 className="section-title">Estatísticas Rápidas</h2>
            {/* Passar os valores corrigidos para o componente EstatisticasRapidas */}
            <EstatisticasRapidas 
              concluidos={concluidos} 
              total={total} 
              media={`${media}%`} 
            />
          </div>
        </section>
        <section id="motivation-section" className="motivation-section">
          <div className="motivation-message">
            <h2 className="section-title">Mensagem dos Profissionais</h2>
            <p>“Lembre-se de que reconhecer seus sentimentos é o primeiro passo para o bem-estar mental. Não hesite em buscar ajuda profissional quando necessário.”</p>
            <p className="professional">- Psicóloga Edna Soares</p>
            <p className="date">28/08/2024</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TesteMental;

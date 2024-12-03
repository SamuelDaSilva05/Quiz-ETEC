import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Resultados.css';

const Resultados = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { respostas, tipoQuiz, concluidos } = location.state || { respostas: [], tipoQuiz: "Quiz", concluidos: 0 };

  const obterResultado = (respostas) => {
    if (!respostas || respostas.length === 0) {
      return 0;
    }

    const pontuacao = respostas.reduce((total, resposta) => {
      switch (resposta) {
        case 'Sempre':
          return total + 4;
        case 'Normalmente sim':
          return total + 3;
        case 'Às vezes':
          return total + 2;
        case 'Raramente':
          return total + 1;
        case 'Nunca':
          return total;
        default:
          return total;
      }
    }, 0);

    return pontuacao;
  };

  const resultado = obterResultado(respostas);

  const handleVoltarAoInicio = () => {
    navigate('/testemental', { state: { concluidos: concluidos + 1, concluido: true } });
  };

  return (
    <div className="resultados-container">
      <h1>Resultados do {tipoQuiz}</h1>
      <p className="pontuacao">Sua pontuação: {resultado}</p>
      <p className="feedback">
        {resultado >= 30 ? "Você está enfrentando altos níveis de sintomas. É recomendável procurar ajuda profissional." :
         resultado >= 20 ? "Você está enfrentando níveis moderados de sintomas. Considere falar com um profissional." :
         resultado >= 10 ? "Você está enfrentando alguns sintomas. Fique atento a quaisquer mudanças." :
         "Você tem poucos ou nenhum sintoma. Continue cuidando de sua saúde mental."}
      </p>
      <div className="recomendacoes">
        <h2>Recomendações</h2>
        <ul>
          {resultado >= 30 && <li>Considere marcar uma consulta com um psicólogo ou psiquiatra.</li>}
          {resultado >= 20 && <li>Explore práticas de mindfulness e técnicas de relaxamento.</li>}
          {resultado >= 10 && <li>Pratique exercícios físicos regularmente.</li>}
          {resultado < 10 && <li>Mantenha um diário de gratidão para focar em aspectos positivos da vida.</li>}
        </ul>
      </div>
      <div className="buttons-container">
        <button className="button" onClick={handleVoltarAoInicio}>Voltar ao Início</button>
        <button className="button" onClick={() => navigate('/recomendacoes')}>Como Tratar</button>
      </div>
    </div>
  );
};

export default Resultados;

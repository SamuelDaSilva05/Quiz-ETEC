import React from 'react';
import './EstatisticasRapidas.css';

const EstatisticasRapidas = ({ concluidos, total, media }) => (
  <div className="estatisticas-rapidas">
    <p>Testes Concluídos: {concluidos} / {total}</p>
    <p>Pontuação Média: {media}</p>
  </div>
);

export default EstatisticasRapidas;

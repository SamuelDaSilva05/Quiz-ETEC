import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pergunta.css';

const PerguntaAnsiedade = () => {
  const [respostas, setRespostas] = useState(Array(10).fill(''));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const perguntas = [
    "Com que frequência você sente preocupação excessiva ou ansiedade?",
    "Você se sente inquieto ou incapaz de relaxar facilmente?",
    "Com que frequência você sente medo ou pânico sem motivo aparente?",
    "Você tem dificuldade para controlar suas preocupações?",
    "Você sente tensão muscular ou palpitações?",
    "Você se preocupa excessivamente com eventos futuros?",
    "Você tem dificuldade em se concentrar devido à ansiedade?",
    "Com que frequência você sente que algo ruim vai acontecer?",
    "Você se sente facilmente irritado ou impaciente?",
    "Você tem problemas de sono relacionados à ansiedade?"
  ];

  const handleRespostaChange = (event) => {
    const newRespostas = [...respostas];
    newRespostas[currentQuestionIndex] = event.target.value;
    setRespostas(newRespostas);

    // Adicionar transição suave
    if (currentQuestionIndex < perguntas.length - 1) {
      const perguntaContainer = document.querySelector('.pergunta-container');
      perguntaContainer.classList.add('fade-out');
      setTimeout(() => {
        perguntaContainer.classList.remove('fade-out');
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 500);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      const perguntaContainer = document.querySelector('.pergunta-container');
      perguntaContainer.classList.add('fade-out');
      setTimeout(() => {
        perguntaContainer.classList.remove('fade-out');
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }, 500);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/resultados', { state: { respostas, tipoQuiz: 'Ansiedade' } });
  };

  return (
    <div className="container">
      <div className="pergunta-container">
        <h1>Teste de Ansiedade</h1>
        <p className="step-indicator">PASSO {currentQuestionIndex + 1} DE {perguntas.length}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>{perguntas[currentQuestionIndex]}</label>
            <div className="radio-buttons">
              {['Sempre', 'Normalmente sim', 'Às vezes', 'Raramente', 'Nunca'].map((option, index) => (
                <label key={index} className="radio-label">
                  <input
                    type="radio"
                    value={option}
                    checked={respostas[currentQuestionIndex] === option}
                    onChange={handleRespostaChange}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="button-container">
            {currentQuestionIndex > 0 && (
              <button type="button" onClick={handlePrevQuestion}>Voltar</button>
            )}
            {currentQuestionIndex === perguntas.length - 1 && (
              <button type="submit">Enviar Respostas</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default PerguntaAnsiedade;

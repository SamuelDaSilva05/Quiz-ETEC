import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pergunta.css';

const PerguntaDepressao = () => {
  const [respostas, setRespostas] = useState(Array(10).fill(''));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const perguntas = [
    "Com que frequência você se sente desanimado ou sem esperança?",
    "Você tem dificuldade em sentir prazer nas atividades diárias?",
    "Com que frequência você se sente cansado ou sem energia?",
    "Você tem dificuldade para se concentrar ou tomar decisões?",
    "Você tem pensamentos de autocrítica ou se sente inútil?",
    "Você tem dificuldade para dormir ou dorme em excesso?",
    "Você sente que não tem valor ou que as pessoas estariam melhor sem você?",
    "Você tem dificuldade em começar ou terminar tarefas?",
    "Você sente que seu apetite mudou significativamente?",
    "Você tem pensamentos sobre a morte ou se machucar?"
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
    navigate('/resultados', { state: { respostas, tipoQuiz: 'Depressão' } });
  };

  return (
    <div className="container">
      <div className="pergunta-container">
        <h1>Teste de Depressão</h1>
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

export default PerguntaDepressao;

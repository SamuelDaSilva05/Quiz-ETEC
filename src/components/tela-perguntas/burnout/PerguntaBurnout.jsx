import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pergunta.css';

const PerguntaBurnout = () => {
  const [respostas, setRespostas] = useState(Array(10).fill(''));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const perguntas = [
    "Você se sente emocionalmente exausto devido ao trabalho?",
    "Você se sente desmotivado ou indiferente em relação ao seu trabalho?",
    "Com que frequência você sente que não está sendo eficaz ou produtivo no trabalho?",
    "Você sente falta de energia ou tem dificuldade em começar novas tarefas?",
    "Você se sente desapegado ou cínico em relação ao seu trabalho?",
    "Você tem dificuldade em se concentrar no trabalho?",
    "Você sente que está trabalhando demais e não tem tempo para si mesmo?",
    "Você se sente sobrecarregado pelas responsabilidades do trabalho?",
    "Você tem problemas de sono devido ao estresse do trabalho?",
    "Você sente que seu trabalho está afetando negativamente sua vida pessoal?"
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
    navigate('/resultados', { state: { respostas, tipoQuiz: 'Burnout' } });
  };

  return (
    <div className="container">
      <div className="pergunta-container">
        <h1>Teste de Burnout</h1>
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

export default PerguntaBurnout;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pergunta.css';

const PerguntaStress = () => {
  const [respostas, setRespostas] = useState(Array(10).fill(''));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const perguntas = [
    "Com que frequência você se sente sobrecarregado com as responsabilidades diárias?",
    "Você tem dificuldade em dormir devido ao estresse?",
    "Com que frequência você sente tensão muscular ou dores de cabeça relacionadas ao estresse?",
    "Você tem dificuldade para relaxar no seu tempo livre?",
    "Você sente irritabilidade ou frustração facilmente?",
    "Você sente que não tem tempo suficiente para fazer tudo?",
    "Você tem mudanças de humor repentinas?",
    "Você sente que está constantemente correndo contra o tempo?",
    "Você tem problemas digestivos relacionados ao estresse?",
    "Você sente que está sempre no limite, prestes a explodir?"
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
    navigate('/resultados', { state: { respostas, tipoQuiz: 'Estresse' } });
  };

  return (
    <div className="container">
      <div className="pergunta-container">
        <h1>Teste de Estresse</h1>
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

export default PerguntaStress;

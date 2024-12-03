import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pergunta.css';

const PerguntaTraumas = () => {
  const [respostas, setRespostas] = useState(Array(10).fill(''));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const perguntas = [
    "Você tem pensamentos intrusivos sobre um evento traumático passado?",
    "Você evita lugares ou situações que lembram o evento traumático?",
    "Você tem pesadelos ou flashbacks relacionados ao evento traumático?",
    "Você se sente emocionalmente entorpecido ou distante dos outros?",
    "Você tem dificuldade para dormir ou se concentrar?",
    "Você tem reações físicas, como sudorese ou taquicardia, ao lembrar do evento?",
    "Você sente uma sensação constante de alerta ou perigo iminente?",
    "Você tem dificuldade em lembrar detalhes importantes do evento traumático?",
    "Você sente vergonha ou culpa em relação ao evento?",
    "Você tem explosões de raiva ou irritabilidade sem motivo aparente?"
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
    navigate('/resultados', { state: { respostas, tipoQuiz: 'Traumas' } });
  };

  return (
    <div className="container">
      <div className="pergunta-container">
        <h1>Teste de Traumas</h1>
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

export default PerguntaTraumas;

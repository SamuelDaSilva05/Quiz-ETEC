import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Recomendacoes.css';

const Recomendacoes = () => {
  const navigate = useNavigate();

  const handlePsychologistContact = () => {
    alert('Funcionalidade de contato com o psicólogo será adicionada futuramente.');
  };

  return (
    <div className="tratamento-container">
      <h1>Como Tratar?</h1>
      <p className="intro-paragraph">Em 1952, a Associação Psiquiátrica Americana (American Psychiatric Association) publicou pela primeira vez o Manual Diagnóstico e Estatístico de Distúrbios Mentais (Diagnostic and Statistical Manual of Mental Disorders, DSM-1), que foi a primeira tentativa de abordar o diagnóstico das doenças mentais por meio de definições e critérios padronizados. A edição mais recente, DSM-5-TR, publicada em 2022, fornece um sistema de classificação que tenta separar as doenças mentais em categorias diagnósticas com base na descrição dos sintomas (ou seja, o que dizem e fazem as pessoas como reflexo do que pensam e sentem) e no curso da doença.</p>

      <div className="condicao">
        <h2>Depressão</h2>
        <p>A depressão é um distúrbio mental que causa um sentimento persistente de tristeza e perda de interesse.</p>
        <h3>Tratamentos Recomendados</h3>
        <ul>
          <li>Terapia Cognitivo-Comportamental (TCC)</li>
          <li>Medicamentos antidepressivos</li>
          <li>Exercícios físicos</li>
          <li>Suporte social</li>
        </ul>
        <h3>Recursos Educacionais</h3>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=-zUDcDiAmyg&t=12s" target="_blank" rel="noopener noreferrer">Vídeo sobre Depressão</a></li>
        </ul>
        <button className="button" onClick={handlePsychologistContact}>Contato com Psicólogo</button>
      </div>

      <div className="condicao">
        <h2>Ansiedade</h2>
        <p>A ansiedade envolve sentimentos intensos e persistentes de preocupação e medo sobre situações cotidianas.</p>
        <h3>Tratamentos Recomendados</h3>
        <ul>
          <li>Terapia de exposição</li>
          <li>Medicamentos ansiolíticos</li>
          <li>Mindfulness e meditação</li>
          <li>Técnicas de respiração</li>
        </ul>
        <h3>Recursos Educacionais</h3>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=bxE9bQWkuxI" target="_blank" rel="noopener noreferrer">Vídeo sobre Ansiedade</a></li>
        </ul>
        <button className="button" onClick={handlePsychologistContact}>Contato com Psicólogo</button>
      </div>

      <div className="condicao">
        <h2>Trauma</h2>
        <p>O trauma resulta de um evento extremamente estressante ou perturbador que sobrecarrega a capacidade da pessoa de lidar com a situação.</p>
        <h3>Tratamentos Recomendados</h3>
        <ul>
          <li>Terapia de reprocessamento por movimentos oculares (EMDR)</li>
          <li>Terapia de exposição prolongada</li>
          <li>Terapia narrativa</li>
        </ul>
        <h3>Recursos Educacionais</h3>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=fpyUbzZowEU" target="_blank" rel="noopener noreferrer">Vídeo sobre Trauma</a></li>
        </ul>
        <button className="button" onClick={handlePsychologistContact}>Contato com Psicólogo</button>
      </div>

      <div className="condicao">
        <h2>Burnout</h2>
        <p>O burnout é um estado de exaustão emocional, física e mental causado por estresse excessivo e prolongado no trabalho.</p>
        <h3>Tratamentos Recomendados</h3>
        <ul>
          <li>Redução de carga de trabalho</li>
          <li>Terapia Cognitivo-Comportamental (TCC)</li>
          <li>Mindfulness e relaxamento</li>
          <li>Balanceamento entre vida pessoal e profissional</li>
        </ul>
        <h3>Recursos Educacionais</h3>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=TuGbn-9jK1g&t=1s" target="_blank" rel="noopener noreferrer">Vídeo sobre Burnout</a></li>
        </ul>
        <button className="button" onClick={handlePsychologistContact}>Contato com Psicólogo</button>
      </div>

      <div className="condicao">
        <h2>Estresse</h2>
        <p>O estresse é uma resposta do corpo a situações de pressão ou ameaça, levando a sintomas físicos e emocionais.</p>
        <h3>Tratamentos Recomendados</h3>
        <ul>
          <li>Terapia Cognitivo-Comportamental (TCC)</li>
          <li>Exercícios de respiração e relaxamento</li>
          <li>Atividades físicas regulares</li>
          <li>Gerenciamento de tempo e priorização</li>
        </ul>
        <h3>Recursos Educacionais</h3>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=zpQOCJVuF50&t=70s" target="_blank" rel="noopener noreferrer">Vídeo sobre Estresse</a></li>
        </ul>
        <button className="button" onClick={handlePsychologistContact}>Contato com Psicólogo</button>
      </div>

      <button
        className="button"
        onClick={(e) => {
          e.preventDefault(); // Previne comportamento padrão em caso de links ou botões inconsistentes
          navigate('/resultados'); // Navega para a rota '/resultados'
        }}
>
  Voltar
</button>
    </div>
  );
};

export default Recomendacoes;

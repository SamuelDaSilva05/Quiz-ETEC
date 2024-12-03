import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/tela-login/Login';
import Register from './components/tela-registro/Register';
import TesteMental from './components/tela-sintomas/TesteMental';
import EsqueciSenha from './components/tela-esqueceu-senha/EsqueciSenha';
import Recomendacoes from './components/tela-psicologo/Recomendacoes';
import Configuracoes from './components/tela-configuracoes/Configuracoes'; 
import Sobre from './components/tela-sobre/Sobre'

import PerguntaDepressao from './components/tela-perguntas/depressao/PerguntaDepressao';
import PerguntaAnsiedade from './components/tela-perguntas/ansiedade/PerguntaAnsiedade';
import PerguntaTraumas from './components/tela-perguntas/traumas/PerguntaTraumas';
import PerguntaStress from './components/tela-perguntas/estresse/PerguntaStress';
import PerguntaBurnout from './components/tela-perguntas/burnout/PerguntaBurnout';
import Resultados from './components/tela-resultados/Resultados';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/testemental" element={<TesteMental />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />
          <Route path="/recomendacoes" element={<Recomendacoes />} />
          <Route path="/configuracoes" element={<Configuracoes />} /> 
          <Route path="/sobre" element={<Sobre />} />
          
          {/* Rotas para os componentes de perguntas */}
          <Route path="/perguntas/depressao" element={<PerguntaDepressao />} />
          <Route path="/perguntas/ansiedade" element={<PerguntaAnsiedade />} />
          <Route path="/perguntas/traumas" element={<PerguntaTraumas />} />
          <Route path="/perguntas/estresse" element={<PerguntaStress />} />
          <Route path="/perguntas/burnout" element={<PerguntaBurnout />} />
          
          <Route path="/resultados" element={<Resultados />} />

          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

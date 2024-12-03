-- Inserir Usuários
INSERT INTO users (username, email, password) VALUES 
('usuario1', 'usuario1@example.com', 'senha1'),
('usuario2', 'usuario2@example.com', 'senha2'),
('usuario3', 'usuario3@example.com', 'senha3');

-- Inserir Testes
INSERT INTO tests (name, description) VALUES 
('Depressão', 'Teste para avaliar sintomas de depressão.'),
('Ansiedade', 'Teste para avaliar sintomas de ansiedade.'),
('Trauma', 'Teste para avaliar sintomas de trauma.'),
('Burnout', 'Teste para avaliar sintomas de burnout.'),
('Estresse', 'Teste para avaliar níveis de estresse.');

-- Inserir Resultados
INSERT INTO results (user_id, test_id, score) VALUES 
(1, 1, 80),
(1, 2, 75),
(2, 3, 85),
(3, 4, 90),
(3, 5, 70);

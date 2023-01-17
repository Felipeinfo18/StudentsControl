// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Iniciando e importando Multer
const multer = require("multer");
const config = require('./src/config/multer');

// Importando os Controllers
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro');
const editar = require('./src/controllers/editar');

// Iniciando as rotas
route.get('/', home.pagInicialGet);
route.post('/', home.pagInicialPost);
route.get('/cadastroSala', cadastro.sala);
route.post('/cadastroSala', cadastro.salaInsert);
route.get('/cadastroAluno', cadastro.aluno);
route.post('/cadastroAluno', multer(config).single('foto'), cadastro.alunoInsert);
route.get('/editarAluno/:id', editar.alunos);
route.post('/editarAluno/:id', multer(config).single('foto'), editar.adicionar);

module.exports = route;
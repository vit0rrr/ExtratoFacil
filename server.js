// server.js

// 1. Importa o framework Express que acabamos de instalar.
const express = require('express');

// 2. Cria uma "instância" do nosso aplicativo Express.
const app = express();

// 3. Define uma "porta" onde nosso servidor irá rodar. Pense nisso como o número de um apartamento em um prédio.
const port = 3000;

// 4. Cria nossa primeira "rota". Uma rota define o que acontece quando alguém acessa uma URL.
// app.get('/', ...) significa: "Quando alguém fizer uma requisição GET para a URL raiz ('/')..."
app.get('/', (req, res) => {
    // "...envie de volta (response) o texto 'Nosso backend está funcionando!'".
    res.send('Nosso backend está funcionando!');
});

// 5. Inicia o servidor e o faz "escutar" por requisições na porta que definimos.
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Pressione Ctrl+C para derrubar o servidor.');
});
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

const apiKey = '3208963754a5463dadf965a872f083e9'; // Armazene isso em uma variável de ambiente em produção.

app.get('/news', (req, res) => {
    const url = `https://newsapi.org/v2/everything?q=Paraíba AND (campanha política OR eleições 2024)&language=pt&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(error => {
            console.error("Erro ao buscar as notícias:", error);
            res.status(500).send("Erro ao buscar as notícias.");
        });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

const express = require('express')

//cria uma aplicacao express
const app = express()

const http = require('http').createServer(app);

//minha aplicação express use a pasta public como pública
app.use(express.static('public'))

const PORT = 8080
http.listen(PORT, () => console.log('Servidor iniciado na porta ' + PORT))

app.get('/', (req, res) => res.sendFile(__dirname + 'index.html'))
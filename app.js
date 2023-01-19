const express = require('express');
const path = require('path');

const port = process.env.PORT || 3001

const app = express();

const publicPath =path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log('Servidor corriendo en puerto ${port}');
});

app.get('/404', (req, res) => {
    res.send("Error página no encontrada")
});

app.get('/', (req, res) => {
    res.sendFile (path.join(__dirname, '/views/index.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
  });
  
  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
  });
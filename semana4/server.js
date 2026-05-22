const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamene,desde mi servidor termux');
});

app.listen(3000,"0.0.0.0",() => {
  console.log('Servidor ejecutándose en puerto 3000');
});


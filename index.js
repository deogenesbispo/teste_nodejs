const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.get('/', (req, res)=>{
    res.send('Servidor de teste rodando na porta: '+PORT);
});

app.listen(PORT,HOST,console.log("Servidor rodando no endereço '"+HOST+"' e porta '"+PORT+"'."));
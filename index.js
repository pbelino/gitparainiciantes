const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.status(200).send({message:'Ola mundo, este é o meu novo repositorio clonado.'})
})

app.listen(4001,()=>{
    console.log("API inicializada na porta 4001");
})
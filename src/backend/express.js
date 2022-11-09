const express = require('express')
const ConnectingMongo = require('./database/ConnetingDb')
const cors = require('cors')
const bodyparser = require("body-parser")
const app = express()

app.use(express.json())
app.use(cors())

var urlencodedParser = bodyparser.urlencoded({ extended: false})


app.get("/api", (req, res) =>{
    res.json({"users": ["one","two","three"]})
})

app.post('/api', urlencodedParser, (req, res) =>{

    response = {
        nome: req.body.email,
        numero: req.body.Numero,
        mensage: req.body.Mensagem
    }
    res.end(JSON.stringify(response))
} )

//install axios, import axios from 'axios';

// Envia uma requisição post
/*
axios({
  method: "post",
  url: "/user/12345",
  data: {
    firstName: "Fred",
    lastName: "Flintstone",
  },
});

no data coloca a data dos inputs, a url do express(5000), 
*/
ConnectingMongo()

app.listen(5000, () => console.log('rodando na port 5000'))

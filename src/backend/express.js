const express = require('express')
const ConnectingMongo = require('./database/ConnetingDb')
const cors = require('cors')
const bodyparser = require("body-parser")
const app = express()
const userModel = require('./database/schema')
const { db } = require('./database/schema')

app.use(express.json())
app.use(cors())




app.get("/post", (req, res) =>{
    res.json({"users": ["one","two","three"]})
})

app.post('/post', (req, res) =>{

    const name = req.body.name
    const email = req.body.email
    const number = req.body.number

    const user = userModel.create(req.body)
    
    res.status(200).send(user)
   
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

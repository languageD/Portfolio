const express = require('express')

const cors = require('cors')
const bodyparser = require("body-parser")
const app = express()
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


app.listen(5000, () => console.log('rodando na port 5000'))

const express = require('express')
const ConnectingMongo = require('./database/ConnetingDb')
const cors = require('cors')
const app = express()
const userModel = require('./database/schema')


app.use(express.json())
app.use(cors())


app.get("/post", (req, res) =>{
    res.json({"users": ["one","two","three"]})
})

app.post('/post', (req, res) =>{
    const user = userModel.create(req.body)
    res.status(200).send(user)
})

ConnectingMongo()

app.listen(5000, () => console.log('rodando na port 5000'))

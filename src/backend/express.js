const express = require('express')
const ConnectingMongo = require('./database/ConnetingDb')
const cors = require('cors')
const app = express()
const userModel = require('./database/schema')
const bodyParser = require('body-parser')



app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get("/post", (req, res) =>{
    res.json({"users": ["one","two","three"]})
})

app.post('/post', async (req, res) =>{ 
    if(res.status(200)){
        try{
            const user = await userModel.create(req.body)
            res.status(200).send(user)
        }
        catch(err){
            res.status(400).send(err)
            console.log(err)
        }  
    }    
})

ConnectingMongo()   

app.listen(5000, () => console.log('rodando na port 5000'))

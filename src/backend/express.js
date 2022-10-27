const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())


app.get("/api", (req, res) =>{
    res.json({"users": ["one","two","three"]})
})

app.post('/api', (req, res) =>{
    const user = userModel.create(req.body)

    res.status(200).send(user)
} )


app.listen(5000, () => console.log('rodando na port 5000'))

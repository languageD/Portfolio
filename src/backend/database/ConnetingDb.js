const moongoose = require('mongoose')



const ConnectingMongo = async () => {
    try{
        await moongoose.connect( 
        `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cardigan.trimt0i.mongodb.net/?retryWrites=true&w=majority`,)
        console.log('conectado')
    }catch(err){
        console.log('failed to connect to MongoDB', err)
    }
   
}

module.exports = ConnectingMongo 
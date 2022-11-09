const moongoose = require('mongoose')

const ConnectingMongo = async () => {
    await moongoose.connect(
        'mongodb+srv://admin:gF42pMKl2lZv1yIk@cardigan.trimt0i.mongodb.net/test', err =>{
            if(err){
                console.log('aconteceu um erro')
            }
            console.log('Conectado com sucesso!')
        }
    )
}

module.exports = ConnectingMongo
const moongose = require('mongoose')    /* para traer y crear el modelo de usuarios */
const Schema = moongose.Schema
//moongose trae su propio tipos de datos dentro de un objeto
const User = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },    
})

module.exports = moongose.model('user', User)

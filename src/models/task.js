//  Acá irá el esquema de modelado de nuestros datos
const mongoose = require('mongoose');

// El método Schema me permite definir el esquema de los datos
const { Schema } = mongoose;


// Definimos como se almacenarán nuestros datos en la db
const TaskSchema = new Schema({
    title: { type : String, required: true,},
    description: { type : String, required: true}
})

module.exports = mongoose.model('Task', TaskSchema);

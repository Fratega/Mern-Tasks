// Archivo del servidor
const express = require("express");
const morgan = require("morgan");
const path = require("path")

const { mongoose } = require('./database')

const app = express();

// Settings 
// Seteamos que server usará en que situación, port = process.env.PORT
app.set('port', process.env.PORT || 3000) 

// Middlewares = Funciones que se ejecutan antes de llegar a nuestras rutas
app.use(morgan('dev'));
app.use(express.json());


// Routes
app.use('/api/tasks', require('./routes/task.routes'));

// Static Files
// Acá señalo que mi archivo estático est'a en esta dirección
app.use(express.static(path.join(__dirname, 'public')));


// Levantando el servidor
// Acá lo obtenemos luego de definirlo en settings
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
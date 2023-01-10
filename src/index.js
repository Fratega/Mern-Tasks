// Archivo del servidor
const express = require("express");
const app = express();

// Settings 
// Seteamos que server usará en que situación, port = process.env.PORT
app.set('port', process.env.PORT || 3000) 

// Middlewares = Funciones que se ejecutan antes de llegar a nuestras rutas

// Routes

// Static Files

// Levantando el servidor
// Acá lo obtenemos luego de definirlo en settings
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
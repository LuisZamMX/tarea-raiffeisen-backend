//Se configuran los módulos que necesitaremos
const express = require('express');
//Morgan permite visualizar en consola las peticiones que se hacen a la api
const morgan = require('morgan');
const cors = require('cors');

//Configuraciones 
const api = express();
const PORT = process.env.PORT || 3000;

/*
Middlewares:
cors se utiliza para permitir la comunicación entre el frontend con el backend
urlencoded analiza las solucitudes entrantes
express.json permite la utilización de objetos json
routes llama al ruteados y agrega el prefijo api, donde haremos las peticiones desde el frontend
*/
api.use(cors());
api.use(morgan('dev'));
api.use(express.urlencoded({ extended: true }));
api.use(express.json({ express: true }));

//Verificaciones del servidor
api.get('/', (req, res) => res.send('¡Servidor funcionando!'));
api.get('/api', (req, res) => res.send('¡API funcionando!'));

//Se exportan las constantes que utiliza index.js
module.exports = { api, PORT };
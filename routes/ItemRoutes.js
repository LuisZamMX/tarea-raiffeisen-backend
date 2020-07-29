//Se llama a los módulos de express y router
const express = require('express');

const router = express.Router();

//Se llama al controlador ItemController para utilizar sus métodos en las rutas
const { ItemController } = require('../controllers'); 

//Se definen las rutas y su respectiva función de ItemController
//Lista de items
router.get('/items', ItemController.getItems, ItemController.getTotal);
//Total de existencias de items
router.get('/total', ItemController.getTotal);
//Promedio de precios
router.get('/promedio', ItemController.getPromedio);

module.exports = router;
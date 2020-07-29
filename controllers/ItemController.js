/*
Se utiliza el módulo fs para leer los datos del archivo JSON que contiene los items
*/
const fs = require('fs');
const json = require('express');

//Se leen los items del archivo JSON y se guardan en una constante llamada items
const json_items = fs.readFileSync('data/items.json', 'utf-8'); 
const items = JSON.parse(json_items);

module.exports = {
    //Método que envía la lista de items 
    getItems: (req, res) => {
        res.send(JSON.parse(json_items))    
    },
    //Método que envía el total de cantidades de los items
    getTotal: (req, res) => {
        var total = 0
        items.forEach(item => {
            total += item["quantity"]
        });
        res.send(total.toString())
    },
    //Método que envía el promedio de los precios de los items
    getPromedio: (req, res) => {
        var suma = 0
        var promedio = 0
        items.forEach(item => {
            suma += item["price"];
        });
        promedio = suma / items.length
        res.send(promedio.toString())
    }
};
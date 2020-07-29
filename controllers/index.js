/*
Se obtiene el controlador de los Items a través de este archivo index. Esto con la finalidad
de disminuir el acoplamiento o dependencia entre módulos. De esta forma, si se requiere en 
un futuro agregar un controlador, sólo se deberá agregar en este index y no se deberá llamar
desde los demás archivos como routes/index.js
*/

const ItemController = require('./ItemController');

module.exports = {ItemController};
/*
Se obtiene el ruteador de los Items a través de este archivo index. Esto con la finalidad
de disminuir el acoplamiento o dependencia entre módulos. De esta forma, si se requiere en 
un futuro agregar un ruteador, sólo se deberá agregar en este index y no se deberá llamar
desde los demás archivos como api/index.js
*/

const express = require('express');

const router = express.Router();

router.use(require('./ItemRoutes'));

module.exports = router;
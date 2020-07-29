//Se traen las constantes api y PORT de api/index.js
const {api, PORT} = require('./api');

//Se levanta el servidor mediante api y especificando el puerto. Al terminar, ejecuta el console.log
api.listen(PORT, () => console.log(`Listen on ${PORT}`));
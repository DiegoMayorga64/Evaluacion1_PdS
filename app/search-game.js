const games = require('./load-games.js')
const error= require('./error-log.js')

function funcionalidad(name){
    if (!name) {
        return new error.ErrorHandler(400, 'Debes proporcionar un nombre de juego.');
      }
    
      const juegoEncontrado = juegos.find((juego) => juego.name.toLowerCase() === name.toLowerCase());
    
      if (!juegoEncontrado) {
        return new error.ErrorHandler(404, 'Juego no encontrado.');
      }else{
        juegoEncontrado;
      }

}

module.exports=funcionalidad;
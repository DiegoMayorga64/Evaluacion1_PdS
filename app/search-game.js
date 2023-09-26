const games = require('../controller/load-games.js')
const error= require('./error-log.js')

function funcionalidad(name){

    let juegoEncontrado;

        if (!name) {
            return new error.ErrorHandler(400, 'Debes proporcionar un nombre de juego.');
          }

          for(const consola in games){
            const juegos = games[consola]; // Busca el juego por nombre en los juegos de la consola actual
            juegoEncontrado= juegos.find((juego) =>
            juego.name.toLowerCase() === name.toLowerCase()
            )
            if(juegoEncontrado){
                return juegoEncontrado;
            }
        }    
        if (!juegoEncontrado) {
            return new error.ErrorHandler(404, 'Juego no encontrado.');
        }
}

module.exports=funcionalidad;
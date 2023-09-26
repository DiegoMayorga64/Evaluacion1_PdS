const express = require('express');
const videoGames = require('../controller/load-games');
const errorLog=require('./error-log')
const funcionalidad=require('./search-game')
const app = express();
const port = 3000;

/**
 * Obtiene juegos aleatorios de un array.
 * @param {Array} gameArray - El array de juegos de donde se obtendrán los datos.
 * @param {number} number_games - El número de juegos aleatorios que se deben obtener.
 * @returns {Array} - Array que contiene los juegos aleatorios.
 */

function getRandomGames(gameArray, number_games) {
  const randomGames = [];
  for (let i = 0; i < number_games; i++) {
    const randomIndex = Math.floor(Math.random() * gameArray.length);
    randomGames.push(gameArray[randomIndex]);
  }
  return randomGames;
}

function verificarError(respuestaBuscador,respuesta){
  if(respuestaBuscador===errorLog.ErrorHandler){
      return errorLog.handleError(respuestaBuscador,respuesta);
  }else{
      return respuesta.json(respuestaBuscador);
  }
}

app.get('/consoles/:console/random_games', (req, res) => {
  const consoleToShow = req.params.console;
  const games = videoGames[consoleToShow];
  if (games) {
    const randomGames = getRandomGames(games, 2); 
    res.json({ console: consoleToShow, randomGames });
  } else {
    res.status(404).json({ error: 'Consola no encontrada' });
  }
});

app.get('/game',(req,res)=>{
  const respuestaBuscador=funcionalidad(req.query.name);
  verificarError(respuestaBuscador,res);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
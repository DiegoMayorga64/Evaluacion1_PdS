const express = require('express');
const GameService = require('../service/game-service'); // Import the GameService class
const GameController = require('../controller/game-controller'); // Import the GameController class
const functionality = require('../service/search-game');

const app = express();
const port = 3000;

/**
 * Define routes for getting random games for a console and searching for a game by name.
 */

app.get('/consoles/:console/random_games', GameController.getRandomConsoleGames);
app.get('/game', GameController.searchGame);
app.post('/genres/random_games', GameController.getRandomGamesByGenre);
app.post('/consoles/:console/genres/:genre/random_game', GameController.getRandomGameByConsoleAndGenre);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.get('/',(requerimiento,respuesta)=>{
  const respuestaBuscador=functionality(requerimiento.query.name);
  verificarError(respuestaBuscador,respuesta);
});

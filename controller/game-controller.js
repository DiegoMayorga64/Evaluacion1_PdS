const videoGames = require('./load-games');
const errorLog = require('../service/error-log');
const funcionalidad = require('../service/search-game');
const GameService = require('../service/game-service');

/**
 * Controller for managing video game-related operations.
 */
class GameController {
  /**
   * Retrieves random games for a specified console.
   * @param {Object} req - Request object.
   * @param {Object} res - Response object.
   */
  static getRandomConsoleGames(req, res) {
    const consoleToShow = req.params.console;
    const games = videoGames[consoleToShow];
    if (games) {
      const randomGames = GameService.getRandomGames(games, 2);
      res.json({ console: consoleToShow, randomGames });
    } else {
      res.status(404).json({ error: 'Console not found' });
    }
  }

  /**
   * Searches for a game by name.
   * @param {Object} req -  Request object.
   * @param {Object} res -  Response object.
   */
  static searchGame(req, res) {
    const respuestaBuscador = funcionalidad(req.query.name);
    GameController.verifyError(respuestaBuscador, res);
  }

  /**
   * Verifies and handles errors.
   * @param {Object} respuestaBuscador - Response from the search functionality.
   * @param {Object} respuesta -  Response object.
   */
  static verifyError(respuestaBuscador, respuesta) {
    if (respuestaBuscador === errorLog.ErrorHandler) {
      return errorLog.handleError(respuestaBuscador, respuesta);
    } else {
      return respuesta.json(respuestaBuscador);
    }
  }

/**
 * Retrieves three random games for a specified video game genre.
 * @param {Object} req - Request object.
 * @param {Object} res - Response object.
 */

  static getRandomGamesByGenre(req, res) {
    const genreName = req.body.genre_name; 
    const genreGames = [];

    for (const consola in games) {
      const gamesList = games[consola];
      const matchingGames = gamesList.filter((game) =>
        game.genre.toLowerCase() === genreName.toLowerCase()
      );
      genreGames.push(...matchingGames);
    }
  
    if (genreGames.length === 0) {
      res.status(404).json({ error: 'No games found for the specified genre.' });
    } else {
      const randomGames = GameService.getRandomGames(genreGames, 3);
      res.json({ recommended_games: randomGames });
    }
  }

 /**
 * Recommends a random video game that matches the specified console and genre.
 * @param {Object} req - The Request object containing parameters.
 * @param {Object} res - The Response object for sending the recommendation.
 * @returns {void}
 */
  static getRandomGameByConsoleAndGenre(req, res) {
    const consoleName = req.params.console;
    const genreName = req.params.genre;
    const genreGames = [];

    if (games.hasOwnProperty(consoleName)) {
      const consoleGames = games[consoleName];
      const matchingGames = consoleGames.filter((game) =>
        game.genre.toLowerCase() === genreName.toLowerCase()
      );
      genreGames.push(...matchingGames);
    }
  
    if (genreGames.length === 0) {
      res.status(404).json({ error: 'No games found for the specified console and genre.' });
    } else {
      const randomIndex = Math.floor(Math.random() * genreGames.length);
      const randomGame = genreGames[randomIndex];
      res.json({ recommended_game: randomGame });
    }
  }
  
  
}


module.exports = GameController;

/**
 * Searches for a game by its name.
 * @param {string} name - The name of the game to search for.
 * @returns {Object|error.ErrorHandler} - Returns a game object if found, or an error.ErrorHandler if not found.
 */
function functionality(name) {
    let foundGame;
  
    if (!name) {
      return new error.ErrorHandler(400, 'Please enter the game name.');
    }
  
    for (const console in games) {
      const gamesList = games[console];
      foundGame = gamesList.find((game) =>
        game.name.toLowerCase() === name.toLowerCase()
      );
      if (foundGame) {
        return foundGame;
      }
    }
  
    if (!foundGame) {
      return new error.ErrorHandler(404, 'Game not found.');
    }
  }
  
  module.exports = functionality;
  
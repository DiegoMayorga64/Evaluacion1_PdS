class GameService {
  /**
   * Retrieves random games from an array.
   * @param {Array} gameArray - The array of games from which data will be obtained.
   * @param {number} numberGames - The number of random games to retrieve.
   * @returns {Array} - Array containing the random games.
   */
  static getRandomGames(gameArray, numberGames) {
    const randomGames = [];
    for (let i = 0; i < numberGames; i++) {
      const randomIndex = Math.floor(Math.random() * gameArray.length);
      randomGames.push(gameArray[randomIndex]);
    }
    return randomGames;
  }
}

module.exports = GameService;

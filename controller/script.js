
const videoGames = require('./load-games.js');

const consoleToShow = 'PS2';

function showVideoGamesFromConsole() {
  console.log(videoGames[console]);
}

function showVideoGamesByConsole() {
  console.log(videoGames.GBA);
  console.log(videoGames.PS2);
  console.log(videoGames.N64);
}

showVideoGamesFromConsole(consoleToShow);

showVideoGamesByConsole();
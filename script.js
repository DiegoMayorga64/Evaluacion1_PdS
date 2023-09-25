// you can use this variable like this: videoGames.N64 to get the N64 video games list
const videoGames = require('./load-games.js');

// DEMO CODE
const consoleToShow = 'PS2';

// Show all video games from specific console
function showVideoGamesFromConsole(console) {
  console.log(videoGames[console]);
}

// Show all video games by console
function showVideoGamesByConsole() {
  console.log(videoGames.GBA);
  console.log(videoGames.PS2);
  console.log(videoGames.N64);
}

showVideoGamesFromConsole(consoleToShow);

showVideoGamesByConsole();

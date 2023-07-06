//main.js

//Installer le package commander pour créer des commandes simples et avec des options. 
//trouver des parametres : -a --author pour les auteurs de la quote. -n --number pour le nombre de quote.

// Source quotes : https://github.com/sin0light/api-kaamelott/blob/master/assets/quotes.json

const quotes = require('./src/assets/quotes.json');

/**
 * 
 * @param {string} character 
 * @param {string} author 
 * @param {number} book 
 * @param {number} episode 
 */
function searchQuote(character = "all", author = "all", book = 0, episode = 0) {
    
  }

console.log(helloNpm());
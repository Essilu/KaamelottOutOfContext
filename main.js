//main.js

//Installer le package commander pour créer des commandes simples et avec des options. 
//trouver des parametres : -a --author pour les auteurs de la quote. -n --number pour le nombre de quote.

//  Features : 
//  -a --author pour les auteurs de la quote.
//  -b --book pour le livre de la quote.
//  -c --character pour le personnage de la quote.
// -reload la liste des quotes. (scraper le wikifandom ? https://kaamelott.fandom.com/fr/wiki/Citations)
// - -h --help pour afficher l'aide.
// - -v --version pour afficher la version.
// ajouter un mode pour créer des citation avec photo de fond. (bibliotheque de photo ? )

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
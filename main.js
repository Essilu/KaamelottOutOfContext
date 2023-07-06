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
const fs = require('fs');

const quotes = require('./src/assets/quotes.json');

function getAllActors () {
  const actors = Array.from(new Set(quotes.map(quote => quote.actor)));
  return actors;
}

function getRandomQuote () {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

console.log(linkActorToCharacter());
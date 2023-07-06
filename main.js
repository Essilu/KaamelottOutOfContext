import quotes from "./src/assets/quotes.json" assert { type: "json" };
import chalk from "chalk";

// Get all actors from the quotes.json file
function getAllActors() {
  const actors = Array.from(new Set(quotes.map((quote) => quote.actor)));
  return actors;
}

// Get random quotes from the quotes.json file
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function getQuotebyId(id) {
  return quotes[id]
}

// Format the quote with the character name, context and quote
function formatQuote(quote) {
  let formattedQuote = chalk.blue(`${quote.character}`) + `: ${quote.quote}`;

  // if the quote starts with a ( its a context format it accordingly
  if (quote.quote.startsWith("(")) {
    let endIndex = quote.quote.indexOf(")");
    formattedQuote =
      chalk.italic(quote.quote.substring(1, endIndex)) + "\n"
      chalk.blue(`${quote.character}`) +
      `: ${quote.quote}`;
    
  // if the quote starts with a [ its a saying format it accordingly
  } else if (quote.quote.startsWith("[")) {
    let endIndex = quote.quote.indexOf("]");
    formattedQuote =
      chalk.italic(quote.quote.substring(1, endIndex)) + "\n" +
      chalk.blue(`${quote.character}`) +
      `: ${quote.quote}`;
    
  }
  return formattedQuote;
}
console.log(formatQuote(getQuotebyId(1)));

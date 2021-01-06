/******************************************
Treehouse FSJS Techdegree: project 1 - A Random Quote Generator
******************************************/


// An array of object's key and value pairs (global scope)
let quotes = [
  {
    quote:"True peace is not merely the absence of tension: it is the presence of justice.",
    source:"Martin Luther King Jr",
    year:1955
  }, {
    quote:"It isn't enough to talk about peace. One must believe in it. And it isn't enough to believe in it. One must work at it.",
    source:"Eleanore Roosevelt",
    citation:"Voice of America broadcast (11 November 1951)"
  }, {
    quote:"Logic is the beginning of wisdom, not the end.",
    source:"Spock"
  }, {
    quote:"Be less curious about people and more curious about ideas",
    source:"Marie Curie"
  }, {
    quote:"Am I good enough? Yes I am",
    source:"Michelle Obama"
  }
];


// 'getRandomQuote' returns an object from the 'quotes' array index at random
function getRandomQuote() {
  // 'quoteIndex' stores a random number between [0] and 'quotes' length, [4]
  let quoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[quoteIndex];  // Passes 'quotes' for 'quoteIndex' to randomize and return as an object
}


// 'printQuote' function prints the 'getRandomQuote' object into an HTML message displayed on the webpage
function printQuote(message) {
  let result = getRandomQuote();
  var message = '';
  message += "<p class='quote'>" + result.quote + "</p>";
  message += "<p class='source'>" + result.source;
  if ( result.citation ) {  // Checks for 'citation' property, adds it to 'message'
    message += "<span class='citation'>" + result.citation + "</span>"
  };
  if ( result.year ) {  // Checks for 'year' property, adds it to 'message'
    message += "<span class='year'>" + result.year + "</span>"
  };
  message += "</p"
  // Displays HTML string 'message' using 'innerHTML' property to interact with the browser
  document.getElementById('quote-box').innerHTML = message;
};


/***
  When the "Show another quote" button is clicked, the event listener
  will be triggered, and it will call the `printQuote` function.
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
// An array of quote objects to display
let quotes = [
  {
    quote:"We ask justice, we ask equality, we ask that all the civil and political rights that belong to citizens of the United States, be guarenteed to us and our daughters forever.",
    source:"-Susan B. Anthony",
    year:"1876"
  },
  {
    quote:"It isn't enough to talk about peace. One must believe in it. And it isn't enough to believe in it. One must work at it.",
    source:"-Eleanore Roosevelt",
    citation:"Voice of America broadcast (11 November 1951)"
  },
  {
    quote:"Logic is the beginning of wisdom, not the end.",
    source:"-Spock"
  },
  {
    quote:"Be less curious about people and more curious about ideas",
    source:"-Marie Curie"
  },
  {
    quote:"Am I good enough? Yes I am",
    source:"-Michelle Obama"
  }
];


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Use the random number to `return` a random quote object from the `quotes` array.
***/
// Creates randomQuote function
function getRandomQuote() {
  var randomQuote = Math.floor( Math.random() * quotes.length );
//  for( let i = 0; )
  return randomQuote;
}
console.log( getRandomQuote() );

/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote() {
  getRandomQuote = randomQuote();
  document.querySelector('main').innerHTML = quotes;
}

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

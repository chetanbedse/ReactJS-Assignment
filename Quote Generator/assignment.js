// Assignment
// Create a quote generator
// It will have quote and author name
// Take 10 quotes in an array and take any random quote after clicking on button

let quotesArray = [
  {
    quote:
      "The purpose of a writer is to keep civilization from destroying itself.",
    author: "Albert Camus",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Mother Teresa",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    quote:
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
];

const quote = document.querySelector("#quoteText");
const author = document.querySelector("#quoteAuthor");
const btnNext = document.querySelector("#nextQuote");

btnNext.addEventListener("click", function () {
  let singleQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
  quote.innerHTML = singleQuote.quote;
  author.innerHTML = singleQuote.author;
});

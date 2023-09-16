const quotes = [
  {
    quote: "Life is not fair; get used to it.",
    author: "Bill Gates",
  },
  {
    quote: "Maturity consists in having rediscovered the seriousness one had as a child at play.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Well begun is half done.",
    author: "Aristotle",
  },
  {
    quote: "I believe that one of life's greatest risks is never daring to risk.",
    author: "Oprah Winfrey",
  },
  {
    quote: "What you risk reveals what you value.",
    author: "Jeanette Winterson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
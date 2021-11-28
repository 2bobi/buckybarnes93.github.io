
const quotes = [
    {
        quote : "夢は逃げない。逃げるのはいつも自分だ",
        author : "夢"
    },
    {
        quote : "愛とは決して後悔しないこと",
        author : "愛"
    },
    {
        quote : "もしもあなたに限界があるならそれはあきらめた瞬間でしょう。",
        author : "限界"
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

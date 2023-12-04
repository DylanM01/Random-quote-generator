const newQuoteButton = document.getElementById('generate-btn');
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

function getQuote() {
    fetch('https://api.quotable.io/random', { mode: "cors" })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let response = data;
            quoteText.innerText = response.content
            quoteAuthor.innerText = response.author
        })
        .catch(function (err) {
            console.error('error')
        });
}

newQuoteButton.addEventListener('click', () => {
    getQuote();
})
// quoteBtn
const generateQuoteBtn = document.getElementById('quoteBtn')
// quoteOutput
const quoteOutput = document.getElementById('quoteOutput')
// authorOutput
const authorOutput = document.getElementById('authorOutput')

generateQuoteBtn.addEventListener('click', generateQuote)

const arrayOfQuotes = [
    {
        author: 'Albert Einstein',
        quote: "We cannot solve problems with the kind of thinking we employed when we came up with them."
    },
    {
        author: 'Mahatma Gandhi',
        quote: "Learn as if you will live forever, live like you will die tomorrow."
    },
    {
        author: 'Norman Vincent Peale',
        quote: "When you change your thoughts, remember to also change your world"
    },
    {
        author: 'Henry David Thoreau',
        quote: "Success usually comes to those who are too busy to be looking for it."
    },
    {
        author: 'Herman Melville',
        quote: "It is better to fail in originality than to succeed in imitation."
    },
    {
        author: 'Colin R. Davis',
        quote: "The road to success and the road to failure are almost exactly the same."
    },
]

function generateQuote() {
    let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1) 
    quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`
    authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`
}

generateQuote
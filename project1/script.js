
// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        person: "Walt Disney"
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        person: "Steve Jobs"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        person: "Abraham Lincoln"
    },
    {
        quote: "You must be the change you wish to see in the world.",
        person: "Mahatma Gandhi"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        person: "Mother Teresa"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        person: "Aristotle"
    },
    {
        quote: "Whoever is happy will make others happy too.",
        person: "Anne Frank"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        person: "Maya Angelou"
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        person: "Tony Robbins"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        person: "Wayne Gretzky"
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        person: "Chinese Proverb"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        person: "Confucius"
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        person: "William James"
    },
    {
        quote: "The only true wisdom is in knowing you know nothing.",
        person: "Socrates"
    },
    {
        quote: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt"
    }
];

btn.addEventListener("click", () => {
    const rand = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[rand]['quote']
    person.innerHTML = quotes[rand]['person']
})
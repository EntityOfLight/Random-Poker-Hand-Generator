let cardDeck = ['Ace of Spades', 'Ace of Clubs', 'Ace of Hearts', 'Ace of Diamonds'],
    deckLength = cardDeck.length; // because you'll be accessing the length of the deck later

//console.log(cardDeck);

let cardOne = Math.floor(Math.random()*deckLength);
let cardTwo = Math.floor(Math.random()*deckLength);
let theCards = (`${cardOne}, ${cardTwo}`);
while (cardOne === cardTwo) {
       Math.floor(Math.random()*52) = cardTwo;
    }
console.log(theCards);

//Thinking that I can use cardOne & cardTwo values to maybe call those specific values from the array.

// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
// Use getRandomCard() to set the value of firstCard and secondCard
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// Create a new array - cards - that contains fristCard and secondCard
// Create the player object. Give it two keys, name and chips,
let player = {
    name: "Per",
    chips: 200
}
let cards = [] // array - ordered list of items
let sum = 0
let hasBlackJack = false
// 1. Create a variable called isAlive and assign it to true
let isAlive = true
// 2. Flip its value to false in the appropriate code block
// Declare a variable called message and assign the value is an empty string
let message = ""
// Reassign the message variable to the string we're logging out

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// For id we use # and if we use class in the place of id, then we use .(dot) insted #(hashtag)
// let sumEl = document.querySelector("#sum-el")

// Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")

// Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips

// Create a function, getRandomCard() that always returns the number 5
 

// Make this function return a random number between 1 and 13
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // Generate two random numbers
    // Re-assign the cards and sum variables so that the game can start
    renderGame()
}


function renderGame() {
    // render out firstCard and secondCard
    // Refer to the cards array when rendering out the cards
    cardsEl.textContent = "Cards: " 
    // Create a for loop that renders out all the cards instead of just two
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }


    // render out ALL the cards we have
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()

        sum += card
        // Push the card to the cards array
        cards.push(card)
        renderGame()
    }

}

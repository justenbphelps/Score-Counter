const p1Button = document.getElementById('player1Button')
const p2Button = document.getElementById('player2Button')
const resetButton = document.getElementById('resetButton')

let p1Score = 0
let p2Score = 0
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
let scoreLimit = document.querySelector('#scoreLimit')
let gameOver = false
let limitCount = document.querySelector('#limitCount')


// click player 1 button
p1Button.addEventListener('click', function () {
    if (!gameOver) {
        p1Score++
        if (p1Score === winningScore) {
            p1Display.classList.add('green')
            gameOver = true
        }
        console.log(winningScore)
        p1Display.textContent = p1Score
    }
})

//click player 2 button
p2Button.addEventListener('click', function () {
    if (!gameOver) {
        p2Score++
        if (p2Score === winningScore) {
            p2Display.classList.add('green')
            gameOver = true
        }
        p2Display.textContent = p2Score
    }
})

// click reset button
resetButton.addEventListener('click', function () {
    reset()
})

function reset() {
    p1Score = 0
    p1Display.textContent = p1Score
    p1Display.classList.remove('green')
    p2Score = 0
    p2Display.textContent = p2Score
    p2Display.classList.remove('green')
    gameOver = false
}

//update 'playing to' html with score limit
scoreLimit.addEventListener('change', function () {
    limitCount.textContent = scoreLimit.value
    winningScore = Number(scoreLimit.value)
    reset()
})
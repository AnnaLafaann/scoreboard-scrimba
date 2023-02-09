// Buttons

let mainNumber1 = document.getElementById(`main-number1`)
let mainNumber2 = document.getElementById(`main-number2`)

mainNumber1.textContent = 0
mainNumber2.textContent = 0

let numberOne = 0
let numberTwo = 0

function homeAddOne() {
    numberOne += 1
    mainNumber1.textContent = numberOne
}

function homeAddTwo() {
    numberOne += 2
    mainNumber1.textContent = numberOne
}

function homeAddThree() {
    numberOne += 3
    mainNumber1.textContent = numberOne
}

function guestAddOne() {
    numberTwo += 1
    mainNumber2.textContent = numberTwo
}

function guestAddTwo() {
    numberTwo += 2
    mainNumber2.textContent = numberTwo
}

function guestAddThree() {
    numberTwo += 3
    mainNumber2.textContent = numberTwo
}

//

//New Game

function newGameBtn(){
    numberOne = 0
    mainNumber1.textContent = numberOne
    numberTwo = 0
    mainNumber2.textContent = numberTwo
}

//

if(numberOne > numberTwo) {
    document.getElementById(`home-block`).style(background = pink)
}
import {draw as drawOrb} from './orb.js'

// defining game board as a varible
const gameBoard = document.getElementById('game')

function draw() {
    gameBoard.innerHTML = ''
    drawOrb(gameBoard)
}
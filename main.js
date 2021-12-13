// import/s from different JS file's I may have
import { update as updateOrb, draw as drawOrb} from './orb.js'

let lastRenderTime = 0
// defining game board as a varible
const gameBoard = document.getElementById('game')

// will render the screen every second
function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 ) return
    
    console.log('Render')
// updates our  lastRenderTime to our new currentTime
    lastRenderTime = currentTime
    
// call these function during every new render
    update()
    draw()
}

window.requestAnimationFrame(main)

// our update function that will update everything during each render
function update() {
    updateOrb()
}

// our draw function that will add the orb to the screen during each render
function draw() {
    gameBoard.innerHTML = ''
    drawOrb(gameBoard)
}
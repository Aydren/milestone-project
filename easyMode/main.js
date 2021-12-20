// import/s from different JS file's I may have
import { print } from './hitDetection.js'
import { update as updateOrb, draw as drawOrb} from './orb.js';
import { update as updateScore, scoreBoardImport } from './scoreboard.js';
import { countdownTimer } from './timer.js';

// defining lastRenderTime to 0 here
let lastRenderTime = 0;

// defining game board as a varible
export const gameBoard = document.getElementById('game');

// will render the screen every second
function main(currentTime) {
    window.requestAnimationFrame(main);

// if we change 1000 (1 second) to a smaller number number it will appear for a shorter amount of time will on the screen. And if you were to make it a bigger number it will stay on for longer.
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1600
    if (secondsSinceLastRender < 1 ) return;
    
    console.log('Render')
    
// updates our  lastRenderTime to our new currentTime
    lastRenderTime = currentTime;
    
// call these function during every new render
    update();
    draw();
    gameBoard.addEventListener('click', print)
}

window.requestAnimationFrame(main);

// our update function that will update everything during each render
function update() {
    updateOrb();
    updateScore()
}

// our draw function that will add the orb to the screen during each render
function draw() {
    gameBoard.innerHTML = ''
    drawOrb(gameBoard);
}

// appending score board to HTML
scoreBoardImport()

// updating countdown timer
countdownTimer()
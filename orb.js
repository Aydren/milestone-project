// import/s from different JS file's I may have
import { orbHit } from './hit.js'
import { randomGridPosition } from './random.js'
import { gameBoard, print } from './main.js'

// defining orbLoc
let orbLoc = randomOrbPosition()



// puts the orbLoc within an update function that we will export and call in our main.js update function
export function update() {
    orbLoc = randomOrbPosition()
}

// creates the orb 'div', and gives it the class of 'item'. Also is told where to put the orb on the grid, by calling orbLoc and initializing the function to get an X and Y location
export function draw(gameBoard) {
    const orb = document.createElement('div')
    orb.style.gridRowStart = orbLoc.y
    orb.style.gridColumnStart = orbLoc.x
    orb.style.zIndex = '100'
    orb.classList.add('item')
    gameBoard.appendChild(orb)
    orb.addEventListener('click', e => {
        orbHit()
        gameBoard.removeEventListener('click', print)
    })
}

// function that tells the orb to go on a random spot on the grid
function randomOrbPosition() {
    let newOrbPosition = randomGridPosition()
    return newOrbPosition
}
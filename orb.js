const orb = [{x: 14, y: 14}]

export function draw(gameBoard) {
    const orb = document.createElement('div')
    orb.style.gridRowStart = orb.y
    orb.style.gridColumnStart = orb.x
    orb.classList.add('item')
    gameBoard.appendChild(orb)
}

export function update() {
    
}

function scoreBoard(text, idName) {
    let scoreBoard = document.getElementById('score')
    let newDiv = document.createElement('div')
    scoreBoard.appendChild(newDiv)
    newDiv.textContent = text
    newDiv.setAttribute('id', idName)
}

export function scoreBoardImport() {
    scoreBoard('HIT', 'hit')
    scoreBoard('MISS', 'miss')
    scoreBoard(0, 'hit-score')
    scoreBoard(0, 'miss-score')
}

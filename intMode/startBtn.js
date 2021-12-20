export function startBtn(gameBoard) {
    const start = document.createElement('btn');
    start.style.zIndex = '100';
    
    gameBoard.appendChild(start);
}
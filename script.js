window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            //stops you from going down
            if(lastInputDirection.y !== 0) break
            //lets you go up
            inputDirection = { x: 0, y: -1}
            break
        case 'ArrowDown':
            //stops you from going up
            if(lastInputDirection.y !== 0) break
            //lets you go down
            inputDirection = { x: 0, y: +1}
            break
        case 'ArrowLeft':
            //stops you from going right
            if(lastInputDirection.x !== 0) break
            //lets you go left
            inputDirection = { x: -1, y: 0}
            break
        case 'ArrowRight':
            //stops you from going left
            if(lastInputDirection.x !== 0) break
            //lets you go right
            inputDirection = { x: +1, y: 0}
            break
    }
})
/* //function to get character to move
function moveTron() {
    let tron = document.querySelector('#character');
    let moveBy = 20;

// loads the location of Tron
    window.addEventListener('load', () => {
        tron.style.position = 'relative';
        tron.style.left = 0;
        tron.style.top = 0;
    });

//moves the character in the direction you want when pressed down
    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowLeft': //move left
                tron.style.left = parseInt(tron.style.left) - moveBy + 'px';
                break;
            case 'ArrowRight': //move right
                tron.style.left = parseInt(tron.style.left) + moveBy + 'px';
                break;
            case 'ArrowUp': //move up
                tron.style.top = parseInt(tron.style.top) - moveBy + 'px';
                break;
            case 'ArrowDown': //move down
                tron.style.top = parseInt(tron.style.top) + moveBy + 'px';
                break;
        }
    });
}
moveTron() */
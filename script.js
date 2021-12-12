
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
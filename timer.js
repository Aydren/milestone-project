// setting countdownTimer starting time
let time = 30;

// creating and updating the countdownTimer on page
export function countdownTimer() {
    let timer = document.querySelector('#timer');
    time = time - 1;
    if (time < 30){
        timer.innerText = time;
    } if (time < 0) {
        window.clearInterval(updateTime);
        confirm('Times Up! Press ENTER to restart \nYou Hit \nYou Missed')
        window.location = './'
    }
    return
}

let updateTime = setInterval(countdownTimer, 1000);
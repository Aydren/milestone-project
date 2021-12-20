// setting countdownTimer starting time
let time = 31;

// creating and updating the countdownTimer on page
export function countdownTimer() {
    let timer = document.querySelector('#timer');
    time = time - 1;
    if (time < 30){
        timer.innerText = time;
    } if (time < 1) {
        window.clearInterval(updateTime);
        confirm('Times Up! \n\nPress ENTER to restart')
        window.location = './'
    }
    return
}

let updateTime = setInterval(countdownTimer, 1000);
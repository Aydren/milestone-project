
// removes the orb after it has been hit

let hitScore = 0;

let missedScore = 0;

export function orbHit(){
    const orb = document.querySelector('.item')
    orb.remove();
    console.log('orb was hit');
    let hitScoreboard = document.querySelector('#hit-score');
    hitScore = hitScore + 1;
    hitScoreboard.innerText = hitScore;
}

export let print = function(){
    console.log('you missed')
    let missedScoreboard = document.querySelector('#miss-score');
    missedScore = missedScore + 1;
    missedScoreboard.innerText = missedScore;
}
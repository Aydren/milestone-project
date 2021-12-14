export function orbHit(){
    remove();
    console.log('orb was hit')
}

export function remove(){
    const orb = document.querySelector('.item')
    orb.remove();
}
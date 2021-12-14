//idea came from a snake code along I did
//just a variable for the grid size
const grid = 26

//puts an object on a random location within the grid size
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * grid) + 1,
        y: Math.floor(Math.random() * grid) + 1
    }
}
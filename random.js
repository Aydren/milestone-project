//just a variable for the grid size
const grid = 25

//puts an object on a random spot within the grid size
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * grid) + 1,
        y: Math.floor(Math.random() * grid) + 1
    }
}
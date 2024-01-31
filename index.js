import Grid from './Grid.js'
import Tile from './Tile.js'

const gridElement = document.getElementById('board')

const grid = new Grid(gridElement)
grid.randomEmptyCell().tile = new Tile(gridElement)
grid.randomEmptyCell().tile = new Tile(gridElement)

console.log(grid.cellsByColumn)

inputListener()

function inputListener() {
  window.addEventListener('keydown', handleInput, { once: true })
}

function handleInput(e) {
  console.log(e.key)
  switch (e) {
    case 'ArrowUp':
      moveUp()
      break
    case 'ArrowDown':
      moveDown()
      break
    case 'ArrowLeft':
      moveLeft()
      break
    case 'ArrowRight':
      moveRight()
      break
    default:
      inputListener()
      return
  }
  inputListener()
}

function moveUp() {
  slideTiles(grid.cellsByColumn)
}

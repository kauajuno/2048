import Grid from './Grid.js'
import Tile from './Tile.js'

const gridElement = document.getElementById('board')

const grid = new Grid(gridElement)
grid.randomEmptyCell().tile = new Tile(gridElement)
grid.randomEmptyCell().tile = new Tile(gridElement)

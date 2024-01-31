const BOARD_SIZE = 4
const ROW_SIZE = 20
const GAP_SIZE = 2

export default class Grid {
  #cells
  constructor(gridElement) {
    gridElement.style.setProperty('--board-size', BOARD_SIZE)
    gridElement.style.setProperty('--row-size', `${ROW_SIZE}vmin`)
    gridElement.style.setProperty('--gap-size', `${GAP_SIZE}vmin`)
    this.#cells = createCellElements(gridElement).map((cellElement, index) => {
      return new Cell(
        cellElement,
        index % BOARD_SIZE,
        Math.floor(index / BOARD_SIZE)
      )
    })
    console.log(this.#cells)
  }

  get #emptyCells() {
    return this.#cells.filter((cell) => cell.tile == null)
  }

  get cellsByColumn() {
    return this.#cells.reduce((gridCell, cell) => {
      gridCell[cell.x] = gridCell[cell.x] || []
      gridCell[cell.x][cell.y] = cell
      return gridCell
    }, [])
  }

  randomEmptyCell() {
    const randomIndex = Math.floor(Math.random() * this.#emptyCells.length)
    return this.#emptyCells[randomIndex]
  }
}

class Cell {
  #cellElement
  #x
  #y
  #tile

  constructor(cellElement, x, y) {
    this.#cellElement = cellElement
    this.#x = x
    this.#y = y
  }

  get tile() {
    return this.#tile
  }

  get x() {
    return this.#x
  }

  get y() {
    return this.#y
  }

  set tile(value) {
    this.#tile = value
    if (value == null) return
    this.#tile.x = this.#x
    this.#tile.y = this.#y
  }
}

function createCellElements(gridElement) {
  const cells = []
  for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cells.push(cell)
    gridElement.append(cell)
  }
  return cells
}

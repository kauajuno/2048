const colors = [
  '#DEE9DA',
  '#D5F9C9',
  '#A2D98F',
  '#42F8A0',
  '#27AC94',
  '#78D9D5',
  '#5492BF',
  '#0F92F1',
  '#8798F2',
  '#A088FF',
  '#EE87FF',
]

export default class Tile {
  #tileElement
  #x
  #y

  constructor(container, value = Math.random() > 0.5 ? 2 : 4) {
    this.#tileElement = document.createElement('div')
    this.#tileElement.classList.add('tile')
    container.append(this.#tileElement)
    this.value = value
    this.#tileElement.textContent = `${value}`
    this.#tileElement.style.setProperty(
      '--background-color',
      colors[Math.log2(this.value) - 1]
    )
  }

  set x(value) {
    this.#x = value
    this.#tileElement.style.setProperty('--x', value)
  }

  set y(value) {
    this.#y = value
    this.#tileElement.style.setProperty('--y', value)
  }
}

/* global MutationObserver HTMLElement */

import { raylib_run_string } from './raylib.js'

export default class RaylibComponent extends HTMLElement {
  constructor () {
    super()
    // hide things while setting up
    this.style.display = 'none'
    this.shadow = this.attachShadow({ mode: 'open' })
    this.canvas = document.createElement('canvas')

    window.addEventListener('resize', this.onResize.bind(this))

    this.shadow.innerHTML = `
<style>
canvas.landscape {
  height: 100vh;
  max-width: 100vw;
}
canvas.portrait {
  width: 100vw;
  max-height: 100vh;
}
canvas {
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  object-fit: contain;
}
</style>
`
    this.shadow.appendChild(this.canvas)

    // this makes right-click work better in raylib
    this.canvas.addEventListener('contextmenu', e => e.preventDefault())

    this.start(this.src)
  }

  onResize () {
    // fill seems busted, for some reason it's modifying canvas height/width attributes instead of just the class
    // if (this.fill) {
    //   this.canvas.className = (this.parentElement.clientWidth > this.parentElement.clientHeight) ? 'landscape' : 'portrait'
    // } else {
    //   this.canvas.className = ''
    // }
  }

  static get observedAttributes () {
    return ['src', 'fill']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'fill') {
      this.fill = typeof newValue !== 'undefined'
      this.onResize()
    }
    if (name === 'src') {
      this.src = newValue
      this.start(this.src)
    }
  }

  async start (src) {
    let userCode = this.textContent
    if (src) {
      userCode = await fetch(src).then(r => r.text())
    }
    raylib_run_string(this.canvas, userCode)

    // game is loaded so show myself
    this.style.display = 'block'
  }
}

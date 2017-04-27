const h = require('react-hyperscript')
const { render } = require('react-dom')
const { Surface } = require('gl-react-dom')
const rainbowPixels = require('rainbow-pixels')
const pull = require('pull-stream')
const convert = require('ndpixels-convert')
const Ndarray = require('ndarray')
const insertCss = require('insert-css')
const pixelsGl = require('./')

const main = document.createElement('div')
main.className = 'main'
document.body.appendChild(main)

insertCss(`
  html, body, .main, canvas {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }   
`)

const size = {
  width: 512, //document.body.clientWidth,
  height: 512 //document.body.clientHeight
}

console.log('size', size)

pull(
  pull.infinite(rainbowPixels({
    shape: [size.width / 4, size.height / 4]
  })),
  pull.map(convert('hsl', 'rgb')),
  pull.map(pixels => {
    return Ndarray(Uint8Array.from(pixels.data), pixels.shape, pixels.stride)
  }),
  pull.asyncMap((pixels, cb) => {
    window.requestAnimationFrame(() => {
      cb(null, pixels)
    })
  }),
  pull.drain(pixels => {
    render(
      h(Surface, size, [
        h(pixelsGl, { pixels })
      ]),
      main
    )
  })
)

const h = require('react-hyperscript')
const { render } = require('react-dom')
const { Surface } = require('gl-react-dom')
const rainbowPixels = require('rainbow-pixels')
const pull = require('pull-stream')
const convert = require('ndpixels-convert')
const Ndarray = require('ndarray')
const insertCss = require('insert-css')
const pullRaf = require('pull-raf')
const PixelsGl = require('./')

const size = {
  width: 512,
  height: 512
}
const main = document.querySelector('.main')

pull(
  pull.infinite(rainbowPixels({
    shape: [size.width / 4, size.height / 4]
  })),
  pull.map(convert('hsl', 'rgb')),
  pull.map(pixels => {
    return Ndarray(Uint8Array.from(pixels.data), pixels.shape, pixels.stride)
  }),
  pullRaf(),
  pull.drain((pixels) => {
    render(
      h(Surface, [
        h(PixelsGl, { pixels })
      ]),
      main
    )
  })
)

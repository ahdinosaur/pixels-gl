const rainbowPixels = require('rainbow-pixels')
const convert = require('ndpixels-convert')
const Ndarray = require('ndarray')
const insertCss = require('insert-css')
const pipe = require('value-pipe')
const Regl = require('regl')
const PixelsGl = require('./')

const size = {
  width: 512,
  height: 512
}
const regl = Regl()
const pixelsGl = PixelsGl(regl)

const createPixels = pipe(
  rainbowPixels({
    shape: [size.width / 4, size.height / 4]
  }),
  convert('hsl', 'rgb'),
  castToUint8
)

regl.frame(({ time }) => {
  pixelsGl({ pixels: createPixels() })
})

function castToUint8 (pixels) {
  return Ndarray(Uint8Array.from(pixels.data), pixels.shape, pixels.stride)
}

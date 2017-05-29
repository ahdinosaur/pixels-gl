const rainbowPixels = require('rainbow-pixels')
const pull = require('pull-stream')
const convert = require('ndpixels-convert')
const Ndarray = require('ndarray')
const insertCss = require('insert-css')
const pullRaf = require('pull-raf')
const Regl = require('regl')
const PixelsGl = require('./')

const size = {
  width: 512,
  height: 512
}
const regl = Regl()
const pixelsGl = PixelsGl(regl)

const generatePixels = rainbowPixels({
  shape: [size.width / 4, size.height / 4]
})
const hslToRgb = convert('hsl', 'rgb')

regl.frame(({ time }) => {
  const nextPixels = generatePixels()
  const rgbPixels = hslToRgb(nextPixels)
  const uint8Pixels = castToUint8(rgbPixels)
  pixelsGl({ pixels: uint8Pixels })
})

function castToUint8 (pixels) {
  return Ndarray(Uint8Array.from(pixels.data), pixels.shape, pixels.stride)
}

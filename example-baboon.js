const Regl = require('regl')
const image = require('baboon-image')
const PixelsGl = require('./')

const regl = Regl()
const pixelsGl = PixelsGl(regl)

regl.frame(({ time }) => {
  pixelsGl({ pixels: image })
})

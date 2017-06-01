const Regl = require('regl')
const PixelsGl = require('./')
const pixels = require('baboon-image')

const regl = Regl()
const pixelsGl = PixelsGl(regl)

pixelsGl({ pixels })

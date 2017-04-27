const h = require('react-hyperscript')
const { render } = require('react-dom')
const { Surface } = require('gl-react-dom')
const Pixels = require('./')
const image = require('baboon-image')

render(
  h(Surface, [
    h(Pixels, { pixels: image })
  ]),
  document.querySelector('.main')
)

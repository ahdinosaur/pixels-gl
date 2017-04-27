const h = require('react-hyperscript')
const { render } = require('react-dom')
const { Surface } = require('gl-react-dom')
const rainbowPixels = require('rainbow-pixels')
const pull = require('pull-stream')
const pixelsGl = require('./')

const main = document.createElement('div')
document.body.appendChild(main)

pull(
  pull.infinite(rainbowPixels()),
  pull.asyncMap((pixels, cb) => {
    window.requestAnimationFrame(() => {
      cb(null, pixels)
    })
  }),
  pull.drain(pixels => {
    render(
      h(Surface, { width: 300, height: 300 }, [
        h(pixelsGl, { pixels })
      ]),
      main
    )
  })
)

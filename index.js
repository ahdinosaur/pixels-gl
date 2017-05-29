const Regl = require('regl')

module.exports = pixelsGl

function pixelsGl (options, cb) {
  const regl = Regl(options)
  const render = createRender(regl)

  var pixels, nextPixels
  regl.frame(frame => {
    // clear contents of the drawing buffer
    regl.clear({
      pixels: null,
      depth: 1
    })

    if (pixels === nextPixels) return
    render({ pixels })
    pixels = nextPixels
  })

  return ({ pixels }) => {
    nextPixels = pixels
  }
}

function createRender (regl) {
  return {
    frag: `
      precision highp float;
      varying vec2 uv;
      uniform sampler2D pixels;
      void main() {
        gl_FragColor = texture2D(pixels, uv);
      }
    `,
    uniform: {
      pixels: regl.prop('pixels')
    }
  }
}

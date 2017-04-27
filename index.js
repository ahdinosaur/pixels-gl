const h = require('react-hyperscript')
const { Shaders, Node, GLSL } = require('gl-react')

module.exports = pixelsGl

const shaders = Shaders.create({
  pixels: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D pixels;
      void main() {
        gl_FragColor = texture2D(pixels, uv);
      }
    `
  }
})

function pixelsGl ({ pixels }) {
  return h(Node, {
    shader: shaders.pixels,
    uniforms: {
      pixels
    },
    uniformsOptions: {
      pixels: {
        interpolation: 'nearest',
        wrap: ['clamp to edge', 'clamp to edge']
      }
    }
  })
}

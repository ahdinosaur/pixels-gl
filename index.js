const h = require('react-hyperscript')
const { Shaders, Node, GLSL } = require('gl-react')

module.exports = pixelsGl

const shaders = Shaders.create({
  helloGL: {
    frag: GLSL`
precision highp float;
varying vec2 uv;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, 0.5, 1.0);
}
`
  }
})

function pixelsGl ({ pixels }) {
  return h(Node, { shader: shaders.helloGL })
}

module.exports = pixelsGl

function pixelsGl (regl) {
  const render = regl(createRender(regl))
  return options => {
    const { pixels } = options
    const texture = regl.texture(pixels)
    return render({ texture })
  }
}

// source: https://github.com/regl-project/regl/blob/27d147723565c68821e911e24fc5c7c33296f66e/test/texture-simple.js
function createRender (regl) {
  return {
    frag: `
      precision highp float;
      uniform sampler2D texture;
      varying vec2 uv;
      void main() {
        gl_FragColor = texture2D(texture, uv);
      }
    `,
    vert: `
      precision mediump float;
      attribute vec2 position;
      varying vec2 uv;
      void main () {
        uv = 0.5 * (1.0 + position);
        gl_Position = vec4(position, 0, 1);
      }
    `,
    attributes: {
      position: [
        -4, 4,
        4, 4,
        0, -4
      ]
    },
    uniforms: {
      texture: regl.prop('texture')
    },
    count: 3
  }
}

module.exports = pixelsGl

function pixelsGl (regl) {
  const render = regl(createRender(regl))
  return options => {
    const { pixels } = options
    const texture = regl.texture(pixels)
    return render({ texture })
  }
}

// source: https://github.com/regl-project/regl/blob/gh-pages/example/texture.js
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
        uv = position;
        gl_Position = vec4(1.0 - 2.0 * position, 0, 1);
      }
    `,
    attributes: {
      position: [
        -2, 0,
        0, -2,
        2, 2
      ]
    },
    uniforms: {
      texture: regl.prop('texture')
    },
    count: 3
  }
}

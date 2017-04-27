const test = require('tape')

const pixelsGl = require('../')

test('pixels-gl', function (t) {
  t.ok(pixelsGl, 'module is require-able')
  t.end()
})

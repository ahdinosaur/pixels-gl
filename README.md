# pixels-gl

render pixels with webgl using [`regl`](https://github.com/regl-project/regl)

```shell
npm install --save pixels-gl
```

## example

[baboon/mandrill test image](https://github.com/scijs/baboon-image)

```js
// example-baboon.js
const Regl = require('regl')
const image = require('baboon-image')
const PixelsGl = require('pixels-gl')

const regl = Regl()
const pixelsGl = PixelsGl(regl)

regl.frame(({ time }) => {
  pixelsGl({ pixels: image })
})
```

or a scrolling rainbow 

- [demo](http://dinosaur.is/pixels-gl/)
- [source](./example.js)

## usage

### `PixelsGl = require('pixels-gl')`

### `pixelsGl = PixelsGl({ regl })`

`regl` is an instance of [`require('regl')()`](https://github.com/regl-project/regl/blob/gh-pages/API.md#initialization)

### `pixelsGl({ pixels })`

pixels is an [`ndarray`](https://github.com/scijs/ndarray) for pixels (aka [`ndpixels`](https://github.com/livejs/ndpixels))

to get pixels from a url, see [`get-pixels`](https://github.com/scijs/get-pixels).

## license

The Apache License

Copyright &copy; 2017 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

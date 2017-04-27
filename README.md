# pixels-gl

render pixels with webgl using [`gl-react`](https://github.com/gre/gl-react)

```shell
npm install --save pixels-gl
```

## example

[baboon/mandrill test image](https://github.com/scijs/baboon-image)

```js
// example-baboon.js
const h = require('react-hyperscript')
const { render } = require('react-dom')
const { Surface } = require('gl-react-dom')
const Pixels = require('pixels-gl')
const image = require('baboon-image')

render(
  h(Surface, [
    h(Pixels, { pixels: image })
  ]),
  document.querySelector('.main')
)
```

or a scrolling rainbow 

- [demo](http://dinosaur.is/pixels-gl/)
- [source](./example.js)

## usage

### `Pixels = require('pixels-gl')`

### `<Pixels pixels={pixels} />`

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

robust-determinant-2
====================
Exactly computes the determinant of a 2x2 matrix as an increasing nonoverlapping series.

## Install

		npm install robust-determinant-2


## Example

```javascript
var determinant2 = require("robust-determinant-2")

console.log(determinant2(
	[[1, 0],
	 [0, 1]]))
```

## API

### `require("robust-determinant-2")(m)`
Computes the determinant of a 2x2 matrix as a nonoverlapping increasing series of floats.

* `m` is a matrix

**Returns** A nonoverlapping increasing series encoding the determinant of `m`

## Credits
(c) 2013 Mikola Lysenko. MIT License
pointPlane
====================
Determines if given point is above, on or below plane made by 3 other given points.

## Install

		npm install point-plane


## Example

```javascript
var pointPlane = require("pointPlane")

console.log(pointPlane(
	[-1,-1,0],
	[-1,1,0],
	[1,-1,0],
	[0,0,1]))
```

## API

### `require("pointPlane")(a,b,c,d)`
Determines if given point d is above, on or below plane made by 3 other given points (a, b, and c).

* `a, b, c, and d` are 3-D points encoded as arrays of length 3.

**Returns** 1 if above plane, 0 if on plane, and -1 if below plane.

## Credits
(c) 2013 Brandon Korf. MIT License

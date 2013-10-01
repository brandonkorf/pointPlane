"use strict"

var det3 = require("../det3.js")

require("tape")(function(t) {

	t.same(det3([[1, 0, 0],
							 [0, 1, 0],
							 [0, 0, 1]]), [1])

	t.end()
})
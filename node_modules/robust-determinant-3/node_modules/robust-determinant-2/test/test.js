"use strict"

var det2 = require("../det2.js")

require("tape")(function(t) {

	t.same(det2([[1, 0], [0, 1]]), [1])
	
	t.end()
})
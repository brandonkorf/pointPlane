"use strict"

var robustSum = require("robust-sum")
var robustScale = require("robust-scale")
var det2 = require("robust-determinant-2")

module.exports = robustDeterminant3

function robustDeterminant3(m) {
	var A = robustScale(det2([[m[1][1], m[1][2]], [m[2][1], m[2][2]]]), m[0][0])
	var B = robustScale(det2([[m[1][2], m[1][0]], [m[2][2], m[2][0]]]), m[0][1])
	var C = robustScale(det2([[m[1][0], m[1][1]], [m[1][0], m[1][1]]]), m[0][2])
	return robustSum(robustSum(A, B), C)
}
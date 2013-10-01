var robustSum = require("robust-sum")
var twoProduct = require("two-product")

module.exports = robustDeterminant2

function robustDeterminant2(m) {
	var p = twoProduct(m[0][0], m[1][1])
	var q = twoProduct(m[1][0], m[0][1])
	q[0] *= -1
	q[1] *= -1
	return robustSum(p, q)
}
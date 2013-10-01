"use strict"

//var determinant3 = require("robust-determinant-3");

function pointPlaneTest(a, b, c, d){


//var twoSum = require("two-sum")

//Add two wildly different sized floats
//var result = twoSum(1e64, 1e-64)
//console.log(result)

//Prints:
//  [1e-64, 1e64]

	var m = [];
	m[0] = [];
	m[0][0] = a[0] - d[0];
	m[0][1] = b[0] - d[0];
	m[0][2] = c[0] - d[0];
	m[1] = [];
	m[1][0] = a[1] - d[1];
	m[1][1] = b[1] - d[1];
	m[1][2] = c[1] - d[1];
	m[2] = [];
	m[2][0] = a[2] - d[2];
	m[2][1] = b[2] - d[2];
	m[2][2] = c[2] - d[2];

	//console.log(determinant3([[1,0,0],[0,1,0],[0,0,1]]));

	return m[0][0] * (m[1][1] * m[2][2] - m[2][1] * m[1][2]) + m[0][1] * (m[1][2] * m[2][0] - m[2][2] * m[1][0]) + m[0][2] * (m[1][0] * m[2][1] - m[2][0] * m[1][1]);
}

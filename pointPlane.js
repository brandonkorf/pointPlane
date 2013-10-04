"use strict"

module.exports = pointPlane

function pointPlane(a, b, c, d){

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

	var result = m[0][0] * (m[1][1] * m[2][2] - m[2][1] * m[1][2]) + m[0][1] * (m[1][2] * m[2][0] - m[2][2] * m[1][0]) + m[0][2] * (m[1][0] * m[2][1] - m[2][0] * m[1][1]);

	if (result > 0){
		return 1;
	}
	else if (result == 0){
		return 0;
	}
	return -1; //if result < 0;
}

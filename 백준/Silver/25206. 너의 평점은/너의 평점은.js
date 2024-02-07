
const input = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

let sum = 0;
let sum2 = 0;

const table = {
	'A+': 4.5,
	A0: 4,
	'B+': 3.5,
	B0: 3,
	'C+': 2.5,
	C0: 2,
	'D+': 1.5,
	D0: 1.0,
	F: 0,
};

for (const item of input) {
	const [, score, grade] = item.split(' ');

	if (grade === 'P') continue;

	sum += Number(score) * table[grade];
	sum2 += Number(score);
}

const result = sum / sum2;

console.log(isNaN(result) ? '0.000000' : result.toFixed(6));

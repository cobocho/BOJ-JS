const [length, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const [n, m] = length.split(' ').map(Number);

const numberTable = {};
const nameTable = {};

for (let i = 0; i < n; i++) {
	numberTable[i + 1] = input[i];
	nameTable[input[i]] = i + 1;
}

const result = [];

for (let i = n; i < n + m; i++) {
	// console.log(input[i]);
	if (isNaN(+input[i])) {
		result.push(nameTable[input[i]]);
	} else {
		result.push(numberTable[input[i]]);
	}
}

console.log(result.join('\n'));

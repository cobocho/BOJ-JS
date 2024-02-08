const [n, input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');
const inputArr = input.trim().split(' ').map(Number);

const table = {};
const result = [];

const sorted = [...new Set(inputArr)].sort((a, b) => a - b);

for (let i = 0; i < sorted.length; i++) {
	if (!table[sorted[i]]) table[sorted[i]] = i;
}

for (let i = 0; i < inputArr.length; i++) {
	result.push(table[inputArr[i]]);
}

console.log(result.join(' '));

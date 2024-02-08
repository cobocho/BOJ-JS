const [N, card1, M, card2] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const table = {};

card1.split(' ').forEach((v) => {
	table[v] = true;
});

const result = card2.split(' ').map((v) => {
	return table[v] ? 1 : 0;
});

console.log(result.join(' '));

const [n, card1, m, card2] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const table = {};

const card1Arr = card1.split(' ');
const card2Arr = card2.split(' ');

for (let i = 0; i < n; i++) {
	if (table[card1Arr[i]]) table[card1Arr[i]]++;
	else table[card1Arr[i]] = 1;
}

const result = [];

for (let i = 0; i < m; i++) {
	if (table[card2Arr[i]]) {
		result.push(table[card2Arr[i]]);
	} else result.push(0);
}

console.log(result.join(' '));

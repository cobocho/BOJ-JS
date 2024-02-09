const [length, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const [n, m] = length.split(' ').map(Number);

const table = {};

for (const word of input) {
	if (word.length < m) continue;
	if (table[word]) table[word]++;
	else table[word] = 1;
}

const answer = Object.keys(table).sort((a, b) => {
	if (table[a] !== table[b]) return table[b] - table[a];
	if (a.length !== b.length) return b.length - a.length;
	return a < b ? -1 : 1;
});

console.log(answer.join('\n'));
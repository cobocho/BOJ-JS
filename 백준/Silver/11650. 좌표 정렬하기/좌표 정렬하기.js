const [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((v) => v.split(' ').map(Number));

input.sort((a, b) => {
	if (a[0] === b[0]) return a[1] - b[1];
	return a[0] - b[0];
});

console.log(input.map((v) => v.join(' ')).join('\n'));

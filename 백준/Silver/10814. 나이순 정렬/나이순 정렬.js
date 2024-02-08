const [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((v) => v.split(' '));

input.sort((a, b) => {
	return +a[0] - +b[0];
});

console.log(input.map((v) => v.join(' ')).join('\n'));

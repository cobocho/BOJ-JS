const [, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const result = [];

for (const text of input) {
	const stack = [];
	const words = text.split(' ');
	for (const word of words) {
		for (let i = word.length - 1; i >= 0; i--) {
			stack.push(word[i]);
		}
		stack.push(' ');
	}
	result.push(stack.join('').trim());
}

console.log(result.join('\n'));
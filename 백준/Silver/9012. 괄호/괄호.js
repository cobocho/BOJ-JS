const [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const result = [];

for (const item of input) {
	const stack = [];
	for (const char of item) {
		if (char === '(') stack.push('(');
		else {
			if (stack.length === 0) {
				stack.push('(');
				break;
			}
			stack.pop();
		}
	}
	result.push(stack.length === 0 ? 'YES' : 'NO');
}

console.log(result.join('\n'));

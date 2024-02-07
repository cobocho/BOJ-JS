const [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const result = [];

for (const pw of input) {
	const left = [];
	const right = [];

	for (const char of pw) {
		if (char === '<') {
			if (left.length === 0) continue;
			right.push(left.pop());
		} else if (char === '>') {
			if (right.length === 0) continue;
			left.push(right.pop());
		} else if (char === '-') {
			if (left.length === 0) continue;
			left.pop();
		} else {
			left.push(char);
		}
	}

	result.push(left.concat(right.reverse()).join(''));
}

console.log(result.join('\n'));

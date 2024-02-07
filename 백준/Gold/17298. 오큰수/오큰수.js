const [n, input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');
const inputArr = input.trim().split(' ').map(Number);

const result = Array.from({ length: n }, () => -1);
const stack = [];

for (let i = 0; i < n; i++) {
	const current = inputArr[i];

	while (stack && inputArr[stack[stack.length - 1]] < inputArr[i]) {
		result[stack.pop()] = current;
	}

	stack.push(i);
}

console.log(result.join(' '));
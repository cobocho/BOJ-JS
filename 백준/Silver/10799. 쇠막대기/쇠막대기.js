const input = require('fs').readFileSync('./dev/stdin').toString().trim();

let result = 0;

const stack = [];

for (let i = 0; i < input.length; i++) {
	if (input[i] === ')') {
		stack.pop();
		if (input[i - 1] === '(') {
			result += stack.length;
		} else {
			result++;
		}
	} else {
		stack.push('(');
	}
}

console.log(result);
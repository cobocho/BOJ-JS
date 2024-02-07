const [n, input, ...numbers] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const stack = [];
const table = {};

for (let i = 0; i < input.length; i++) {
	if (['+', '-', '/', '*'].includes(input[i])) {
		const right = stack.pop();
		const left = stack.pop();
		const tmp = eval(`${left}${input[i]}${right}`);
		stack.push(tmp);
	} else {
		if (!table[input[i]]) {
			table[input[i]] = numbers.shift();
		}
		stack.push(table[input[i]]);
	}
}

console.log(stack[0].toFixed(2));
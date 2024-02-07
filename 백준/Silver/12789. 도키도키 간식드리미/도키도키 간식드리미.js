const [n, input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const numbers = input.split(' ').map(Number);
const stack = [];
const reserved = [0];

for (const item of numbers) {
	if (reserved.at(-1) + 1 === item) {
		reserved.push(item);
		while (true) {
			const tmp = stack.pop();
			if (tmp === reserved.at(-1) + 1) {
				reserved.push(tmp);
			} else {
				stack.push(tmp);
				break;
			}
		}
	} else {
		stack.push(item);
	}
}

console.log(reserved.length === numbers.length + 1 ? 'Nice' : 'Sad');

const [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

const list = Array.from({ length: n }, (_, i) => i + 1);
const stack = [0];
const result = [];
const log = [];

for (let i = 0; i < input.length; i++) {
	const current = input[i];

	while (true) {
		if (stack.at(-1) === current) {
			result.push(stack.pop());
			log.push('-');
			break;
		}
		if (stack.at(-1) < current) {
			stack.push(list.shift());
			log.push('+');
			continue;
		}
		break;
	}
}

console.log(result.length === input.length ? log.join('\n') : 'NO');

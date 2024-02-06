const [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const queue = [];
const result = [];

for (const line of input) {
	const [command, value] = line.split(' ');
	if (command === 'push') {
		queue.push(value);
		continue;
	}
	if (command === 'pop') {
		const tmp = queue.shift();
		result.push(tmp ? tmp : -1);
		continue;
	}
	if (command === 'size') {
		result.push(queue.length);
		continue;
	}
	if (command === 'empty') {
		result.push(queue.length === 0 ? 1 : 0);
		continue;
	}
	if (command === 'front') {
		result.push(queue.length === 0 ? -1 : queue.at(0));
		continue;
	}
	if (command === 'back') {
		result.push(queue.length === 0 ? -1 : queue.at(-1));
		continue;
	}
}

console.log(result.join('\n'));
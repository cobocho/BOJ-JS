const [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const deque = [];
const result = [];

for (const line of input) {
	const [command, value] = line.split(' ');
	if (command === 'push_front') {
		deque.unshift(value);
		continue;
	}
	if (command === 'push_back') {
		deque.push(value);
		continue;
	}
	if (command === 'pop_front') {
		const tmp = deque.shift();
		result.push(tmp ? tmp : -1);
		continue;
	}
	if (command === 'pop_back') {
		const tmp = deque.pop();
		result.push(tmp ? tmp : -1);
		continue;
	}
	if (command === 'size') {
		result.push(deque.length);
		continue;
	}
	if (command === 'empty') {
		result.push(deque.length === 0 ? 1 : 0);
		continue;
	}
	if (command === 'front') {
		const tmp = deque.at(0);
		result.push(tmp ? tmp : -1);
		continue;
	}
	if (command === 'back') {
		const tmp = deque.at(-1);
		result.push(tmp ? tmp : -1);
		continue;
	}
}

console.log(result.join('\n'));
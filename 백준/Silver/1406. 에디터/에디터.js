const [str, n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const left = str.split('');
let right = [];

for (const command of input) {
	switch (command.at(0)) {
		case 'L':
			if (left.length === 0) break;
			right.push(left.pop());
			break;
		case 'D':
			if (right.length === 0) break;
			left.push(right.pop());
			break;
		case 'B':
			if (left.length === 0) break;
			left.pop();
			break;
		default:
			const char = command.at(-1);
			left.push(char);
	}
}

console.log(left.concat(right.reverse()).join(''));

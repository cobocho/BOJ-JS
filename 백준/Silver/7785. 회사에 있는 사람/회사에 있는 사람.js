const [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const table = {};

for (const log of input) {
	const [name, act] = log.split(' ');

	if (act === 'enter') {
		table[name] = 1;
	} else {
		delete table[name];
	}
}

console.log(Object.keys(table).sort().reverse().join('\n'));

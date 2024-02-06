let [n, k = Number(k)] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split(' ');
const result = [];

const queue = Array.from({ length: n }, (_, i) => i + 1);

k = Number(k);

let cnt = 1;

while (queue.length) {
	if (cnt % k === 0) {
		result.push(queue.shift());
	} else {
		queue.push(queue.shift());
	}
	cnt++;
}

console.log(`<${result.join(', ')}>`);
let [length, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const [n, c] = length.split(' ').map(Number);
input = input.map(Number);
input.sort((a, b) => a - b);

let start = 1;
let end = input.at(-1);

while (start <= end) {
	const mid = Math.floor((start + end) / 2);

	let count = 1;
	let prev = input[0];

	for (const v of input) {
		if (v - prev < mid) continue;
		prev = v;
		count++;
	}

	if (count < c) {
		end = mid - 1;
	} else {
		start = mid + 1;
	}
}

console.log(end);
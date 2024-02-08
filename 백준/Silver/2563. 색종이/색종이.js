const [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const area = Array.from({ length: 100 }, () =>
	Array.from({ length: 100 }, () => false)
);

let result = 0;

for (let i = 0; i < input.length; i++) {
	const [x, y] = input[i].split(' ').map(Number);

	for (let j = 0; j < 10; j++) {
		for (let k = 0; k < 10; k++) {
			const square = area.at(-y - k)[x + j];
			if (!square) {
				area.at(-y - k)[x + j] = true;
				result++;
			}
		}
	}
}

console.log(result);
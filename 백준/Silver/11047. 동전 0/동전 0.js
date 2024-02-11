let [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

input = input.map(Number).reverse();
const [, k] = n.split(' ').map(Number);

let sum = 0;
let answer = 0;

for (const v of input) {
	while (sum + v <= k) {
		answer++;
		sum += v;
	}
}

console.log(answer);

const [n, input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');
const inputArr = input.trim().split(' ').map(Number);

const DP = Array.from({ length: n }, () => Number.MIN_SAFE_INTEGER);

DP[0] = inputArr[0];

for (let i = 1; i < n; i++) {
	DP[i] = Math.max(inputArr[i], inputArr[i] + DP[i - 1]);
}

console.log(Math.max(...DP));

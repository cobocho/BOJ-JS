const [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const houses = input.map((v) => v.split(' ').map(Number));
const DP = Array.from({ length: n }, () => Array.from({ length: 3 }, () => 0));

DP[0] = [...houses[0]];

for (let i = 1; i < houses.length; i++) {
	DP[i][0] = Math.min(DP[i - 1][1] + houses[i][0], DP[i - 1][2] + houses[i][0]);
	DP[i][1] = Math.min(DP[i - 1][0] + houses[i][1], DP[i - 1][2] + houses[i][1]);
	DP[i][2] = Math.min(DP[i - 1][0] + houses[i][2], DP[i - 1][1] + houses[i][2]);
}

console.log(Math.min(...DP.at(-1)));

const input = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

const n = input[0];

const DP = Array.from({ length: n + 1 }, () => 0);

DP[1] = input[1];
DP[2] = input[1] + input[2];

for (let i = 3; i <= n; i++) {
	DP[i] = Math.max(
		DP[i - 3] + input[i - 1] + input[i],
		DP[i - 2] + input[i],
		DP[i - 1]
	);
}

console.log(DP[n]);

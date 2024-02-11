let [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

const DP = Array.from({ length: +n }, () => 0);
DP[0] = input[0];
DP[1] = input[0] + input[1];
DP[2] = Math.max(input[0], input[1]) + input[2];

for (let i = 3; i < n; i++) {
	DP[i] = Math.max(DP[i - 3] + input[i - 1] + input[i], DP[i - 2] + input[i]);
}

console.log(DP[n - 1]);

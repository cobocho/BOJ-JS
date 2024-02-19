const n = +require('fs').readFileSync('./dev/stdin').toString().trim();

const DP = Array.from({ length: n + 1 }, () => 0);

DP[1] = 3;
DP[2] = 7;

for (let i = 3; i < DP.length; i++) {
	DP[i] = (2 * (DP[i - 2] + DP[i - 1]) - DP[i - 2]) % 9901;
}

console.log(DP[n]);

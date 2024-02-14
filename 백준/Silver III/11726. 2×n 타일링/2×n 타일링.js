const n = +require('fs').readFileSync('./dev/stdin').toString().trim();

const DP = Array.from({ length: n + 1 }, () => 0);

DP[0] = 0;
DP[1] = 1;
DP[2] = 2;

for (let i = 3; i < DP.length; i++) {
	DP[i] = (DP[i - 2] + DP[i - 1]) % 10007;
}

console.log(DP[n]);

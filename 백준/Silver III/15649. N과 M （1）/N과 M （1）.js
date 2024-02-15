const [n, m] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

const result = [];

function DFS(arr) {
	if (arr.length > m) return;
	if (arr.length === m) {
		result.push(arr.join(' '));
		return;
	}

	for (let i = 1; i <= n; i++) {
		if (arr.includes(i)) continue;
		DFS([...arr, i]);
	}
}

for (let i = 1; i <= n; i++) {
	DFS([i]);
}

console.log(result.join('\n'));

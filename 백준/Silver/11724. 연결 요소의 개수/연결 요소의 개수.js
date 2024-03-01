
let [length, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const [n, m] = length.split(' ').map(Number);
input = input.map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => false);

for (const [from, to] of input) {
	graph[from].push(to);
	graph[to].push(from);
}

let answer = 0;

for (let i = 1; i <= n; i++) {
	if (visited[i]) continue;

	answer++;

	const q = [];
	q.push(i);

	while (q.length) {
		const cur = q.pop();
		visited[cur] = true;

		for (const v of graph[cur]) {
			if (visited[v]) continue;
			q.push(v);
		}
	}
}

console.log(answer);

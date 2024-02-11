const [points, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const [n, m, v] = points.split(' ').map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
let visited = Array.from({ length: n + 1 }, () => false);

const DFS_RESULT = [];

for (let i = 0; i < input.length; i++) {
	const [left, right] = input[i].split(' ').map(Number);

	graph[left].push(right);
	graph[right].push(left);
}

for (const line of graph) {
	line.sort((a, b) => a - b);
}

function DFS(n) {
	DFS_RESULT.push(n);
	visited[n] = true;

	for (const v of graph[n]) {
		if (!visited[v]) {
			DFS(v);
		}
	}
}

DFS(v);

console.log(DFS_RESULT.join(' '));

visited = Array.from({ length: n + 1 }, () => false);

const BFS_RESULT = [];

function BFS() {
	const queue = [];
	queue.push(v);

	while (queue.length > 0) {
		const cur = queue.shift();

		if (!visited[cur]) {
			visited[cur] = true;
			BFS_RESULT.push(cur);
		}

		for (const item of graph[cur]) {
			if (!visited[item]) {
				queue.push(item);
			}
		}
	}
}

BFS();

console.log(BFS_RESULT.join(' '));

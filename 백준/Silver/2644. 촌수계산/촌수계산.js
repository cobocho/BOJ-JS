let [n, target, m, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const [targetA, targetB] = target.split(' ').map(Number);
n = +n;

input = input.map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);

for (const v of input) {
	const [parent, child] = v;

	graph[child].push(parent);
	graph[parent].push(child);
}

let q = [];
q.push([targetA, 0]);

const visited = Array.from({ length: n + 1 }, () => false);
visited[targetA] = true;

let result = -1;

while (q.length > 0) {
	const [cur, cnt] = q.pop();
	visited[cur] = true;

	if (cur === targetB) {
		result = cnt;
		break;
	}

	for (const v of graph[cur]) {
		if (visited[v]) continue;

		q.push([v, cnt + 1]);
	}
}

console.log(result);

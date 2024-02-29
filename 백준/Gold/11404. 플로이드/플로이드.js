let [n, m, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

n = +n;
m = +m;
input = input.map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () =>
	Array.from({ length: n + 1 }, () => Infinity)
);

for (let i = 1; i <= n; i++) {
	graph[i][i] = 0;
}

for (const v of input) {
	const [from, to, dist] = v;
	graph[from][to] = Math.min(graph[from][to], dist);
}

for (let i = 1; i <= n; i++) {
	for (let from = 1; from <= n; from++) {
		for (let to = 1; to <= n; to++) {
			if (i === from || from === to) continue;

			graph[from][to] = Math.min(
				graph[from][to],
				graph[from][i] + graph[i][to]
			);
		}
	}
}

const answer = [];

for (let from = 1; from <= n; from++) {
	const tmp = [];
	for (let to = 1; to <= n; to++) {
		if (graph[from][to] === Infinity) {
			tmp.push(0);
		} else {
			tmp.push(graph[from][to]);
		}
	}
	answer.push(tmp.join(' '));
}

console.log(answer.join('\n'));

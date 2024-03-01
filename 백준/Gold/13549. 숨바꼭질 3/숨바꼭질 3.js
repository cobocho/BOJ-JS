let [n, k] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split(' ')
	.map(Number);

const q = [];
const visited = Array.from({ length: Math.max(n, k) + 2 }, () => false);

q.push([n, 0]);

const dirs = [(v) => v * 2, (v) => v - 1, (v) => v + 1];

while (q.length > 0) {
	const [cur, cnt] = q.shift();

	if (cur === k) {
		console.log(cnt);
		break;
	}

	for (let i = 0; i < 3; i++) {
		const dir = dirs[i];
		const delta = dir(cur);

		if (delta < 0 || delta >= visited.length) continue;
		if (visited[delta]) continue;
		visited[delta] = true;

		if (i === 0) {
			q.push([delta, cnt]);
		} else {
			q.push([delta, cnt + 1]);
		}
	}
}

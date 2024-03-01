
let [length, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const [n, m] = length.split(' ').map(Number);
input = input.map((v) => v.split(' ').map(Number));

const table = Array.from({ length: 101 }, (_, i) => 0);
const visited = Array.from({ length: 101 }, () => Infinity);

for (const [block, to] of input) {
	table[block] = to;
}

visited[1] = true;
const q = [];
q.push([1, 0]);

const dice = [1, 2, 3, 4, 5, 6];

while (q.length > 0) {
	const [cur, cnt] = q.shift();

	if (visited[cur] <= cnt) {
		continue;
	}

	visited[cur] = cnt;

	if (table[cur] !== 0) {
		q.push([table[cur], cnt]);
		continue;
	}

	for (const v of dice) {
		const dist = cur + v;

		if (dist > 100) continue;

		if (table[dist] > 0) {
			q.push([table[dist], cnt + 1]);
		} else {
			q.push([dist, cnt + 1]);
		}
	}
}

console.log(visited[100]);

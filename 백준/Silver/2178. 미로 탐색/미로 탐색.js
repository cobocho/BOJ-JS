const [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const maze = Array.from(input, (v) => v.split('').map(Number));
const visited = Array.from({ length: input.length }, () =>
	Array.from({ length: input[0].length }, () => false)
);

const queue = [];
const dirs = [
	[0, 1],
	[0, -1],
	[-1, 0],
	[1, 0],
];

queue.push([0, 0]);
maze[0][0] = 1;
visited[0][0] = true;

while (queue.length > 0) {
	const cur = queue.shift();

	if (cur[0] === maze.length && cur[1] === maze[0].length) break;

	for (const dir of dirs) {
		const sx = cur[0] + dir[0];
		const sy = cur[1] + dir[1];

		if (sx < 0 || sy < 0 || sy > maze.length - 1 || sx > maze[0].length - 1)
			continue;
		if (visited[sy][sx]) continue;
		if (maze[sy][sx] === 0) continue;

		queue.push([sx, sy]);
		visited[sy][sx] = true;
		maze[sy][sx] = maze[cur[1]][cur[0]] + 1;
	}
}

console.log(maze.at(-1).at(-1));
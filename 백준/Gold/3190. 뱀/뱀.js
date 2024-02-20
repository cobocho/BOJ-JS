let [n, k, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const appleID = 1;

let gameEnd = false;

const area = Array.from({ length: +n }, () =>
	Array.from({ length: +n }, () => 0)
);

let timer = 0;

for (let i = 0; i < k; i++) {
	const [y, x] = input[i].split(' ').map(Number);
	area[y - 1][x - 1] = appleID;
}

const snake = {
	body: [[0, 0]],
	rotate: 'R',
};

function go() {
	const head = snake.body.at(-1);
	timer++;

	if (snake.rotate === 'R') {
		snake.body.push([head[0] + 1, head[1]]);
	}
	if (snake.rotate === 'L') {
		snake.body.push([head[0] - 1, head[1]]);
	}
	if (snake.rotate === 'D') {
		snake.body.push([head[0], head[1] + 1]);
	}
	if (snake.rotate === 'U') {
		snake.body.push([head[0], head[1] - 1]);
	}

	const [x, y] = snake.body.at(-1);

	for (let i = 0; i < snake.body.length - 1; i++) {
		if (snake.body[i][0] === x && snake.body[i][1] === y) {
			gameEnd = true;
			return;
		}
	}

	if (x >= n || y >= n || x < 0 || y < 0) {
		gameEnd = true;
		return;
	}

	if (area[y][x] !== appleID) {
		snake.body.shift();
	} else {
		area[y][x] = 0;
	}
}

function rotate(dir) {
	if (snake.rotate === 'R') {
		if (dir === 'L') return (snake.rotate = 'U');
		if (dir === 'D') return (snake.rotate = 'D');
	}
	if (snake.rotate === 'L') {
		if (dir === 'L') return (snake.rotate = 'D');
		if (dir === 'D') return (snake.rotate = 'U');
	}
	if (snake.rotate === 'D') {
		if (dir === 'L') return (snake.rotate = 'R');
		if (dir === 'D') return (snake.rotate = 'L');
	}
	if (snake.rotate === 'U') {
		if (dir === 'L') return (snake.rotate = 'L');
		if (dir === 'D') return (snake.rotate = 'R');
	}
}

outer: for (let i = +k + 1; i < input.length; i++) {
	const [value, dir] = input[i].split(' ');

	for (let i = timer; i < +value; i++) {
		go();

		if (gameEnd) {
			break outer;
		}
	}

	rotate(dir);
}

if (!gameEnd) {
	while (!gameEnd) {
		go();
	}
}

console.log(timer);

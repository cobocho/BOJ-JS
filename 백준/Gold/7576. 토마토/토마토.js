
let [length, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const [w, h] = length.split(' ').map(Number);
input = input.map((v) => v.split(' ').map(Number));

const ripen = [];
let target = 0;

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	first = null;
	last = null;
	size = 0;

	push(val) {
		const newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
	}

	shift() {
		if (!this.first) return null;

		const val = this.first;

		if (this.first === this.last) {
			this.last = null;
		}

		this.first = this.first.next;
		this.size--;

		return val.value;
	}
}

const q = new Queue();

for (let y = 0; y < h; y++) {
	for (let x = 0; x < w; x++) {
		if (input[y][x] == 1) {
			target++;
			q.push([x, y, 0]);
		} else if (input[y][x] == 0) {
			target++;
		}
	}
}

const DIRS = [
	[0, -1],
	[0, 1],
	[1, 0],
	[-1, 0],
];

function solution() {
	let answer = 0;

	let total = 0;

	while (q.size > 0) {
		const [x, y, day] = q.shift();
		total++;
		answer = Math.max(answer, day);

		for (const dir of DIRS) {
			const dx = x + dir[0];
			const dy = y + dir[1];

			if (dx < 0 || dy < 0 || dx >= w || dy >= h) continue;
			if (input[dy][dx] != 0) continue;
			input[dy][dx] = 1;

			q.push([dx, dy, day + 1]);
		}
	}

	if (total !== target) return -1;

	return answer;
}

console.log(solution());

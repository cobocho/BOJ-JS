const [gr, start, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const arr = input.map((v) => v.split(' ').map(Number));

const [n, e] = gr.split(' ').map(Number);

class PriorityQueue {
	constructor() {
		this.heap = [];
	}

	empty() {
		return this.heap.length === 0;
	}

	peek() {
		return this.heap[0];
	}

	swap(idx1, idx2) {
		[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
	}

	insert(data) {
		if (this.empty()) {
			this.heap.push(data);
			return;
		}

		this.heap.push(data);
		let checkedIdx = this.heap.length - 1;

		while (checkedIdx > 0) {
			let parentIdx = Math.floor((checkedIdx - 1) / 2);
			if (this.heap[parentIdx][1] > this.heap[checkedIdx][1]) {
				this.swap(parentIdx, checkedIdx);
				checkedIdx = parentIdx;
			} else {
				break;
			}
		}
	}

	pop() {
		if (this.empty()) return;
		if (this.heap.length === 1) return this.heap.pop();

		const value = this.heap[0];
		this.heap[0] = this.heap.pop();
		let currentIdx = 0;

		while (currentIdx < this.heap.length) {
			let left = currentIdx * 2 + 1;
			let right = left + 1;

			if (!this.heap[left]) break;

			let smaller =
				this.heap[right] !== undefined
					? this.heap[left][1] <= this.heap[right][1]
						? left
						: right
					: left;

			if (this.heap[smaller][1] < this.heap[currentIdx][1]) {
				this.swap(smaller, currentIdx);
				currentIdx = smaller;
			} else {
				break;
			}
		}

		return value;
	}
}

const d = Array.from({ length: n + 1 }, () => Infinity);
const graph = Array.from({ length: n + 1 }, () => []);

for (const v of arr) {
	const [n, t, d] = v;
	graph[n].push([t, d]);
}

function solution(start) {
	const pq = new PriorityQueue();
	pq.insert([start, 0]);
	d[start] = 0;

	while (!pq.empty()) {
		const [curNode, dist] = pq.pop();

		if (d[curNode] < dist) continue;

		for (const v of graph[curNode]) {
			const node = v[0];
			const cost = dist + v[1];

			if (cost < d[node]) {
				pq.insert([node, cost]);
				d[node] = cost;
			}
		}
	}

	d[0] = 0;

	return d;
}

const result = solution(start);
const answer = [];

for (let i = 0; i < result.length; i++) {
	if (i === 0) continue;
	if (result[i] === Infinity) {
		answer.push('INF');
	} else {
		answer.push(result[i]);
	}
}

console.log(answer.join('\n'));

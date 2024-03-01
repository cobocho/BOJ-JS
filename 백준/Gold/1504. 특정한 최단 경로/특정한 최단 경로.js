
let [length, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const [n, e] = length.split(' ').map(Number);
const [v1, v2] = input.pop().split(' ').map(Number);
input = input.map((v) => v.split(' ').map(Number));

class MinHeap {
	heap = [];

	size() {
		return this.heap.length;
	}

	swap(idx1, idx2) {
		[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
	}

	push(data) {
		this.heap.push(data);

		if (this.size() === 1) return;

		let i = this.size() - 1;

		while (i > 0) {
			let parent = Math.floor((i - 1) / 2);

			if (this.heap[parent] > this.heap[i]) {
				this.swap(i, parent);
				i = parent;
			} else {
				break;
			}
		}
	}

	pop() {
		if (this.size() <= 1) {
			return this.heap.pop();
		}

		const value = this.heap[0];

		this.heap[0] = this.heap.pop();
		let i = 0;

		while (i < this.size() - 1) {
			let left = i * 2 + 1;
			let right = left + 1;

			if (!this.heap[left]) break;

			let smaller = this.heap[right]
				? this.heap[left] < this.heap[right]
					? left
					: right
				: this.heap[left];

			if (this.heap[smaller] < this.heap[i]) {
				this.swap(smaller, i);
				i = smaller;
			} else {
				break;
			}
		}

		return value;
	}
}

const graph = Array.from({ length: n + 1 }, () => []);

for (const [from, to, dist] of input) {
	graph[from].push([to, dist]);
	graph[to].push([from, dist]);
}

function find(start, to) {
	const q = new MinHeap();
	const d = Array.from({ length: n + 1 }, () => Infinity);

	q.push([start, 0]);
	d[start] = 0;

	while (q.size() > 0) {
		const [targetNode, dist] = q.pop();

		if (d[targetNode] < dist) continue;

		for (const v of graph[targetNode]) {
			const node = v[0];
			const cost = dist + v[1];

			if (cost < d[node]) {
				q.push([node, cost]);
				d[node] = cost;
			}
		}
	}

	return d[to];
}

function solution() {
	const routeV1 = find(1, v1) + find(v1, v2) + find(v2, n);
	const routeV2 = find(1, v2) + find(v2, v1) + find(v1, n);

	if (routeV1 === Infinity && routeV2 === Infinity) {
		return -1;
	}

	return Math.min(routeV1, routeV2);
}

console.log(solution());

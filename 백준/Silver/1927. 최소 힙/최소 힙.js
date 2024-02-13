
const [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map(Number);

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
			if (this.heap[parentIdx] > this.heap[checkedIdx]) {
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

			let smaller =
				this.heap[right] !== undefined
					? this.heap[left] <= this.heap[right]
						? left
						: right
					: left;

			if (this.heap[smaller] < this.heap[currentIdx]) {
				this.swap(smaller, currentIdx);
				currentIdx = smaller;
			} else {
				break;
			}
		}

		return value;
	}
}

const pq = new PriorityQueue();

const result = [];

for (const v of input) {
	if (v === 0) {
		const tmp = pq.pop();
		if (!tmp) result.push(0);
		else result.push(tmp);
	} else {
		pq.insert(v);
	}
}

console.log(result.join('\n'));

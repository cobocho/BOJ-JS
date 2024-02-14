class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    empty() {
        return this.heap.length === 0;
    }
    
    swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }
    
    push(data) {
        this.heap.push(data);
        
        if (this.heap.length === 1) return;
        
        let i = this.heap.length - 1;
        
        while (i > 0) {
            let parentIdx = Math.floor((i - 1) / 2);
            
            if (this.heap[parentIdx][1] > this.heap[i][1]) {
                this.swap(parentIdx, i);
                i = parentIdx;
            } else {
                break;
            }
        }
    }
    
    pop() {
        if (this.heap.length === 0) return;
        if (this.heap.length === 1) return this.heap.pop();
        
        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        
        let i = 0;
        
        while (i < this.heap.length - 1) {
            const left = i * 2 + 1;
            const right = left + 1;
            
			if (!this.heap[left]) break;
            
            let smaller = this.heap[right] ?
                    this.heap[right][1] > this.heap[left][1]
                    ? left
                    : right
                : left
            
            if (this.heap[smaller][1] < this.heap[i][1]) {
                this.swap(smaller, i);
                i = smaller;
            } else {
                break;
            }
        }
        
        return value;
    }
}

function solution(N, road, K) {
    if (N === 1) {
        return N;
    }
    
    var answer = 0;

    const pq = new MinHeap();
    const d = Array.from({ length: N + 1 }, () => Infinity);
    const graph = Array.from({ length: N + 1 }, () => []);
    
    for (const v of road) {
        const [from, to, dist] = v;
        graph[from].push([to, dist]);
        graph[to].push([from, dist]);
    }
    
    d[1] = 0;
    pq.push([1, 0]);
    
    while(!pq.empty()) {
        const [curNode, curDist] = pq.pop();
        
        if (d[curNode] < curDist) continue;
        
        for (const v of graph[curNode]) {
            const node = v[0];
            const cost = curDist + v[1];
            if (cost < d[node]) {
                d[node] = cost;
                pq.push([v[0], cost]);
            }
        }
    }
    
    
    for (const v of d) {
        if (v <= K) answer++;
    }
       
    return answer;
}
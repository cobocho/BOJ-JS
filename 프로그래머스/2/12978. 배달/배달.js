function solution(N, road, K) {
    if (N === 1) {
        return N;
    }
    
    var answer = 0;

    const queue = [];
    const d = Array.from({ length: N + 1 }, () => Infinity);
    const graph = Array.from({ length: N + 1 }, () => []);
    
    for (const v of road) {
        const [from, to, dist] = v;
        graph[from].push([to, dist]);
        graph[to].push([from, dist]);
    }
    
    d[1] = 0;
    queue.push([1, 0]);
    
    while(queue.length !== 0) {
        const [curNode, curDist] = queue.pop();
        
        if (d[curNode] < curDist) continue;
        
        for (const v of graph[curNode]) {
            const node = v[0];
            const cost = curDist + v[1];
            if (cost < d[node]) {
                d[node] = cost;
                queue.push([v[0], cost]);
                queue.sort((a, b) => b[1] - a[1]);
            }
        }
    }
    
    
    for (const v of d) {
        if (v <= K) answer++;
    }
       
    return answer;
}
function solution(operations) {
    var answer = [];
    operations.forEach((v,i) => {
        if(!['D -1','D 1'].includes(v)) operations[i] = v.split(' ');
    });
    let queue = [];
    for(let x of operations) {
        if(x === 'D -1') queue.shift();
        else if(x === 'D 1') queue.pop();
        else if(x[0] === 'I') {
            queue.push(x[1]);
            queue.sort((a,b) => a - b);
        }
    }
    if(queue.length === 0) return [0,0]
    return [+queue[queue.length - 1], +queue[0]];
}
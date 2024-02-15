function solution(order) {
    var answer = 0;
    
    const stack = [];
    
    const boxes = Array.from({ length: order.length }, (_, i) => order.length - i);

    for (let i = 0; i < order.length; i++) {
        const cur = order[i];
        
        if (stack.at(-1) === cur) {
            stack.pop();
            answer++;
            continue;
        }
        
        while (true) {
            const tmp = boxes.pop();
            if (tmp === cur) {
                answer++;
                break;
            }
            else stack.push(tmp);
            if (boxes.length === 0) return answer;
        }
    }
    
    return answer;
}
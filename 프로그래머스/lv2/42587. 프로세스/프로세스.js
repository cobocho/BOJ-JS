function solution(priorities, location) {
    var answer = 0;
    for(let i = 0; i < priorities.length; i++) {
        if(priorities[i] < Math.max(...priorities)) {
            let first = priorities.shift();
            priorities.push(first);
            if(i === location) location = priorities.length - 1;
            else location--;
        } else {
            priorities.shift();
            answer++;
            if(i === location) return answer
            location--;           
        }
        i--;
    }
    return answer;
}
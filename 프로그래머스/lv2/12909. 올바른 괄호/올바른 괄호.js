function solution(s){
    var answer = true;
    let stack = [];
    for(let x of s) {
        if(x === '(') stack.push(x);
        else if(x === ')'){ 
            if(stack.length === 0) return false;
            else stack.pop();
        }
    }
    if(stack.length === 0) return answer;
    else return false;
}
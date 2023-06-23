function solution(s) {
    if(s.length === 0) return 1;
    let stack = []
    for(let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        while(true) {
            if(stack[stack.length - 1] === stack[stack.length - 2]) {
                stack.pop();
                stack.pop();
                break;
            } else break;
        }
    }
    return stack.length === 0 ? 1 : 0;
}
function check(brackets) {
    let initLength = brackets.length;
    if (["}", "]", ")"].includes(brackets[0])) return false;
    if (["{", "[", "("].includes(brackets[brackets.length - 1])) return false;
    for(let i = 0; i < brackets.length - 1; i++) {
        if(['{}', '[]', '()'].includes(brackets[i] + brackets[i + 1])) {
            brackets.splice(i, 2);
            i--;
        }
    }
    if (brackets.length === 0) return true;
    if (brackets.length === initLength) return false;
    return check(brackets);
}

function solution(s) {
    let answer = 0;
    let arr = s.split("");
    for (let i = 0; i < s.length; i++) {
        arr.push(arr.shift());
        if(check([...arr])) answer++;
    };
    return answer;
}
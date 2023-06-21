function solution(new_id) {
    let answer = new_id;
    answer = answer.toLowerCase();
    answer = answer.replace(/[^a-z0-9-_.]/g, '');
    answer = answer.replace(/\.{2,}/g, ".");
    if(answer[0] === '.') answer = answer.slice(1, answer.length);
    if(answer.length === 0) answer = 'a';
    if(answer.length >= 16) answer = answer.slice(0, 15);
    if(answer[answer.length - 1] === '.') answer = answer.slice(0, answer.length - 1);
    if(answer.length <= 2) {
        const tmp = answer[answer.length - 1];
        while(answer.length < 3) {
            answer = answer + tmp;
        }
    }
    return answer;
}
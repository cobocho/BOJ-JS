function solution(lottos, win_nums) {
    var answer = [];
    let correct = 0;
    let zero = 0;
    let lotto = new Map();
    for(let x of lottos) {
        if(x === 0) zero++;
        else lotto.set(x, 1);
    }
    for(let x of win_nums) if(lotto.has(x)) correct++;
    answer = [7 - (correct + zero), 7 - correct];
    if(answer[0] > 6) answer[0] = 6;
    if(answer[1] > 6) answer[1] = 6;
    return answer;
}
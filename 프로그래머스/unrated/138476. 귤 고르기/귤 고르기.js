function solution(k, tangerine) {
    var answer = 0;
    const type = {};
    tangerine.forEach(item => {
        if (!type[item]) type[item] = 1;
        else type[item]++;
    });
    const arr = Object.values(type).sort((a, b) => b - a);
    let sum = 0;
    for(const number of arr) {
        sum += number;
        answer++;
        if (sum >= k) break;
    }
    return answer;
}
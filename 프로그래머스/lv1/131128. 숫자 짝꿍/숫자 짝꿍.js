const Xmap = {};
const Ymap = {};

function solution(X, Y) {
    const Xmap = getMap(X);
    const Ymap = getMap(Y);
    const numbers = [];
    for(const key in Xmap) {
        if (Ymap[key]) {
            const quantity = Math.min(Xmap[key], Ymap[key]);
            for(let i = 0; i < quantity; i++) numbers.push(+key);
        }
    }
    const answer = numbers.sort((a,b) => b - a).join('');
    if(answer[0] === '0') return '0';
    if(!answer) return '-1';
    return answer;
}

function getMap(val) {
    const map = {};
    [...val].forEach(num => {
        if (map[num]) map[num]++;
        else map[num] = 1;
    })
    return map;
}
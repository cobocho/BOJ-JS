function solution(a, b, n) {
    var answer = 0;
    getCola(n, a, b);
    let cola = n;
    while(true) {
        let tmp = 0;
        if (cola % a !== 0) {
            let rest = (cola % a);
            tmp = tmp + rest;
            cola = cola - rest;
        }
        cola = getCola(cola, a, b);
        answer += cola;
        cola += tmp;
        if(cola < a) {
            break;
        };
    }
    return answer;
}

function getCola(bottle, a, b) {
    if (bottle % a === 0) return b * (bottle / a);
}
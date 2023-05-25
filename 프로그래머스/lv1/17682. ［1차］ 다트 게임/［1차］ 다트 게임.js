function solution(dartResult) {
    const results = getResults(dartResult);
    const answer = results.reduce((acc, cur) => acc += cur, 0);
    return answer;
}

function getResults(str) {
    const results = [];
    let tmp = '';
    for (let i = 0; i < str.length; i++) {
        if (['S', 'D', 'T'].includes(str[i])) {
            if (str[i] === 'S') results.push(Number(tmp));
            if (str[i] === 'D') results.push(Number(tmp) ** 2);
            if (str[i] === 'T') results.push(Number(tmp) ** 3);
            tmp = '';
        }
        else if (str[i] === '#') {
            results[results.length - 1] = results[results.length - 1] * - 1;
        }
        else if (str[i] === '*') {
            results[results.length - 1] = results[results.length - 1] * 2;
            results[results.length - 2] = results[results.length - 2] * 2;
        }
        else tmp += str[i];
    }
    return results;
}
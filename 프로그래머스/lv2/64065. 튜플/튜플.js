function solution(s) {
    var answer = [];
    const regex = /{|}/g;
    s = s.replace(regex, '');
    const numberOnly = s.split(',');
    const obj = {};
    for (let i = 0; i < numberOnly.length; i++) {
        if (obj[numberOnly[i]]) obj[numberOnly[i]] += 1;
        else obj[numberOnly[i]] = 1;
    }
    const arr = [];
    for (const key in obj) {
        arr.push({ key: key, count: obj[key] });
    }
    arr.sort((a,b) => b.count - a.count);
    answer = arr.map(item => +item.key)
    return answer;
}
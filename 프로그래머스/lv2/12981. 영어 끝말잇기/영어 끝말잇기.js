function solution(n, words) {
    var answer = [0, 0];
    let turn = 1;
    let seq = 2;
    let used = new Set();
    used.add(words[0]);
    let lastStr = words[0][words[0].length - 1];
    for(let i = 1; i < words.length; i++) {
        if(words[i][0] !== lastStr || used.has(words[i])) return answer = [seq, turn];
        lastStr = words[i][words[i].length - 1];
        used.add(words[i]);
        if(seq === n) {
            seq = 1;
            turn++;
        } else seq++;
    }
    return answer;
}
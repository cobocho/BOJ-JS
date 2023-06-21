const TABLE = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
}

function solution(msg) {
    var answer = [];
    msg = msg.toUpperCase();
    for (let i = 0; i < msg.length; i++) {
        let cnt = 1;
        let tmp = msg[i];
        let combined = msg[i] + msg[i + cnt];
        while(true) {
            if (TABLE[combined]) {
                tmp += msg[i + cnt];
                cnt++;
                combined += msg[i + cnt];
            } else {
                i += cnt - 1;
                answer.push(TABLE[tmp]);
                TABLE[combined] = Object.keys(TABLE).length + 1;
                break;
            }
        }
    }
    return answer;
}
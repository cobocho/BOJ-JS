function solution(s) {
    var answer = [0, 0];
    while(true) {
        let prevS = s;
        s = s.replaceAll('0', '');
        answer[1] += prevS.length - s.length;
        s = s.length.toString(2);
        answer[0] += 1;
        if(s === '1') break;
    }
    return answer;
}
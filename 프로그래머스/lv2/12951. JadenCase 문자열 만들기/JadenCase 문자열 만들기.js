function solution(s) {
    var answer = '';
    s = s.split(' ');
    for(let x of s) {
        console.log(x.substr(0,1).toUpperCase());
        answer += x.substr(0,1).toUpperCase();
        answer += x.substr(1,x.length).toLowerCase();
        if(x !== s[s.length - 1]) answer += ' ';
    }
    return answer;
}
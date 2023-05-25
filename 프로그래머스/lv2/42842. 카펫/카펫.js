function solution(brown, yellow) {
    var answer = [];
    const round = (brown / 2) + 2;
    answer = getDefault(round);
    while(true) {
        const inner = (answer[0] - 2) * (answer[1] - 2);
        if (inner === yellow) break;
        answer[0]++;
        answer[1]--;
    }
    return answer;
}

function getDefault(round) {
    if (round % 2 === 0) return [round/2, round/2];
    else {
        const half = Math.ceil(round / 2);
        return [half, half - 1];
    }
}
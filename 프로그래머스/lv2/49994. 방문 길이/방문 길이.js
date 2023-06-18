function solution(dirs) {
    var answer = 0;
    let move = 0;
    const pos = [0, 0];
    const history = [];
    for(let i = 0; i < dirs.length; i++) {
        const start = `${pos[0]} ${pos[1]}`
        let valid = true;
        switch (dirs[i]) {
            case "U":
                if (pos[1] + 1 < 6) pos[1] += 1;
                else valid = false;
                break;
            case "D":
                if (pos[1] - 1 > -6) pos[1] -= 1;
                else valid = false;
                break;
            case "R":
                if (pos[0] + 1 < 6) pos[0] += 1;
                else valid = false;
                break;
            case "L":
                if (pos[0] - 1 > -6) pos[0] -= 1;
                else valid = false;
                break;
        }
        const end = `${pos[0]} ${pos[1]}`
        if (valid) {
            if (checkInitial(history, [start, end])) {
                history.push([start, end]);
                answer++;
            }
        }
    }
    console.log(move);
    console.log(history);
    return answer;
}

function checkInitial(history, move) {
    for (let i = 0; i < history.length; i++) {
        if (history[i][0] === move[0] && history[i][1] === move[1]) return false;
        if (history[i][1] === move[0] && history[i][0] === move[1]) return false;
    }
    return true;
}
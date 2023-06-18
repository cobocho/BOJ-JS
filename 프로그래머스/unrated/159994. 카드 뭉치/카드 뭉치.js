function solution(cards1, cards2, goal) {
    var answer = '';
    let progress = 0;
    while (progress < goal.length) {
        if (cards1[0] === goal[progress]) {
            cards1.shift();
            progress++;
        } else if (cards2[0] === goal[progress]) {
            cards2.shift();
            progress++;
        } else {
            return 'No'
        }
    }
    return 'Yes';
}
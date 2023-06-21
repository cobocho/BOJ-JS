const TERM = {};

function solution(today, terms, privacies) {
    var answer = [];
    const TODAY = dateToValue(getDateObject(today));
    for (let i = 0; i < terms.length; i++) {
        const [name, duration] = terms[i].split(' ');
        TERM[name] = +duration;
    }
    
    for (let i = 0; i < privacies.length; i++) {
        let [date, type] = privacies[i].split(' ');
        date = getDateObject(date);
        let dateValue = dateToValue(date);
        dateValue += TERM[type] * 28;
        
        if (dateValue <= TODAY) answer.push(i + 1);
    }
    return answer.sort((a, b) => a - b);
}
    
function getDateObject(date) {
    const [year, month, day] = date.split('.').map(v => +v);
    const result = { year, month, day };
    return result;
}

function dateToValue(date) {
    let result = 0;
    result += date.day;
    result += date.month * 28;
    result += date.year * 28 * 12;
    return result;
}
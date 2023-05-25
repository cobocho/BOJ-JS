const SURVEY_TYPE = {
    A: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    N: 0,
    R: 0,
    T: 0,
}

const CHOICES_TYPE = {
    "1": -3,
    "2": -2,
    "3": -1,
    "4": 0,
    "5": 1,
    "6": 2,
    "7": 3,
}

function solution(survey, choices) {
    var answer = '';
    for(let i = 0; i < choices.length; i++) {
        if (choices[i] === 0) continue;
        const point = CHOICES_TYPE[choices[i]];
        const type = CHOICES_TYPE[choices[i]] < 0 ? survey[i][0] : survey[i][1];
        SURVEY_TYPE[type] += Math.abs(point);
    }
    
    answer = getResult(SURVEY_TYPE);
    return answer;
}

function getResult(obj) {
    let result = '';
    obj.R >= obj.T ? result += 'R' : result += 'T';
    obj.C >= obj.F ? result += 'C' : result += 'F';
    obj.J >= obj.M ? result += 'J' : result += 'M';
    obj.A >= obj.N ? result += 'A' : result += 'N';
    return result;
}
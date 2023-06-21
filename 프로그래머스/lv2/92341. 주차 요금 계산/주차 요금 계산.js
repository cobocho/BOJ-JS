const LOG = {};
const TIMES = {};

function solution(fees, records) {
    let answer = [];
    for (let i = 0; i < records.length; i++) {
        const [time, number, type] = records[i].split(' ');
        if (!TIMES[number]) TIMES[number] = 0;
        if (type === 'IN') addLog([time, number]);
        else {
            TIMES[number] += getDuration(LOG[number], time);
            delete LOG[number];
        }
    }
    for (const number in LOG) {
        TIMES[number] += getDuration(LOG[number], '23:59');
    }
    for (const number in TIMES) {
        answer.push({ number, price: calcFee(TIMES[number], fees) })
    }
    answer = answer.sort((a,b) => a.number - b.number).map(item => item.price);
    return answer;
}

function addLog(data) {
    const [time, number] = data;
    LOG[number] = time;
}

function getDuration(inData, outData) {
    let inTime = 0;
    let outTime = 0;
    const [inHour, inMin] = inData.split(':');
    const [outHour, outMin] = outData.split(':');
    inTime += +inHour * 60;
    inTime += +inMin;
    outTime += +outHour * 60;
    outTime += +outMin;
    return outTime - inTime;
}

function calcFee(duration, fees) {
    if (duration <= fees[0]) return fees[1];
    else return fees[1] + (Math.ceil((duration - fees[0]) / fees[2]) * fees[3]);
}
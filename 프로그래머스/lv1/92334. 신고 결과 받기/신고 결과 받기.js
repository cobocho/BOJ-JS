const log = {};
const reportedList = {};
const banned = [];

function solution(id_list, report, k) {
    id_list.forEach(id => log[id] = new Set());
    report.forEach(item => {
        const [reporter, reported] = item.split(' ');
        log[reporter].add(reported);
    });
    for (const reporter in log) {
        const list = [...log[reporter]];
        for (let i = 0; i< list.length; i++) {
            if (reportedList[list[i]]) reportedList[list[i]]++;
            else reportedList[list[i]] = 1;
            if (reportedList[list[i]] === k) banned.push(list[i]);
        }
    }
    const answer = Object.keys(log).map(reporter => {
        let count = 0;
        for (let i = 0; i < banned.length; i++) {
            if(log[reporter].has(banned[i])) count++;
        }
        return count;
    })
    return answer;
}
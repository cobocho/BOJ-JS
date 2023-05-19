function solution(want, number, discount) {
    var answer = 0;
    const wantList = wantToObj(want, number);
    for(let i = 0; i < discount.length - 9; i++) {
        const discountList = discountToObj(discount.slice(i, 10 + i));
        if (compareObj(wantList, discountList)) answer++;
    }
    return answer;
}

function compareObj(obj1, obj2) {
    for(let key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

function discountToObj(arr) {
    const result = {};
    for(const item of arr) {
        if (!result[item]) result[item] = 1;
        else result[item]++;
    }
    return result;
}

function wantToObj(want, number) {
    const result = {};
    for(let i = 0; i < want.length; i++) {
        result[want[i]] = number[i];
    }
    return result;
}
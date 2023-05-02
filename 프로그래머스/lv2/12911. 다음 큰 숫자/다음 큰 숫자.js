function solution(n) {
    const oneAmount =  n.toString(2).split("").filter(num => num === "1").length;
    let count = n + 1;
    while(true) {
        if(count.toString(2).split("").filter(num => num === "1").length === oneAmount) return count;
        count++;
    }
}
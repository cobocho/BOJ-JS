function solution(n) {
    let a = 0;
    let b = 1;
    
    for (let i = 2; i <= n; i++) {
        const tmp = (a + b) % 1234567;
        a = b;
        b = tmp;
    }
    
    return b;
}

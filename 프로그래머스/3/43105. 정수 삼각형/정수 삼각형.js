function solution(triangle) {
    var answer = 0;
    
    if (triangle === 1) return triangle[0][0];
    
    const DP = Array.from(triangle, (v) => Array.from({length: v.length}, () => 0))
    DP[0][0] = triangle[0][0]
        
    for (let i = 0; i < triangle.length - 1; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            // left child
            DP[i + 1][j] = Math.max(DP[i + 1][j], DP[i][j] + triangle[i + 1][j]);
            // right child
            DP[i + 1][j + 1] = Math.max(DP[i + 1][j + 1], DP[i][j] + triangle[i + 1][j + 1]);
        }
    }
    
    return Math.max(...DP.at(-1));
}
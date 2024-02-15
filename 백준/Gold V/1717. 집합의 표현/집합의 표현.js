const readline = require("readline");
const input = [];

readline.createInterface({
  input: process.stdin,
  output: process.stdout
}).on("line", (line) => {
  input.push(line);
}).on("close", () => {
  main();
  process.exit();
});

function main() {
  let l = 0;

  const [N, M] = input[l++].split(" ").map((e) => parseInt(e));
  
  const table = [];
  
  for(let i=0; i<=N; i++) {
    table.push(i);
  }
  
  const result = [];
  
  for(let i=1; i<=M; i++) {
    const [mode, a, b] = input[l++].split(" ").map((e) => parseInt(e));
  
    if(mode === 0) {
      union(a, b);
    }
    else if(mode === 1) {
      if(find(a) === find(b)) result.push("YES");
      else result.push("NO");
    }
  }
  
  console.log(result.join("\n"));
  
  function find(num) {
    if(table[num] != num) table[num] = find(table[num]);
    return table[num];
  }
  
  function union(numA, numB) {
    numA = find(numA);
    numB = find(numB);
    if(numA < numB) table[numB] = numA;
    else table[numA] = numB;
  }
}

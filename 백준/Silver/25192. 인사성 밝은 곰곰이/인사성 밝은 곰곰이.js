const [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

let set = new Set();
let answer = 0;

for (const log of input) {
	if (log === 'ENTER') {
		answer += set.size;
		set = new Set();
		continue;
	}

	set.add(log);
}

answer += set.size;

console.log(answer);

const [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

let answer = 0;
let current = 0;

const meeting = Array.from(input, (v) => v.split(' ').map(Number));

meeting.sort((a, b) => {
	if (a[1] === b[1]) return a[0] - b[0];
	return a[1] - b[1];
});

for (const time of meeting) {
	const [start, end] = time;

	if (start >= current) {
		current = end;
		answer++;
	}
}

console.log(answer);

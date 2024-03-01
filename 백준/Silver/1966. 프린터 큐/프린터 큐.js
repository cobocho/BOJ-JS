
let [quantity, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

input = input.map((v) => v.split(' ').map(Number));

const queue = [];

let target = null;

const answer = [];

for (let i = 0; i < input.length; i++) {
	if (i % 2 === 0) {
		const [n, m] = input[i];
		target = m;
	} else {
		const q = input[i].map((important, ogIndex) => ({ important, ogIndex }));
		const printed = [];

		outer: while (q.length > 0) {
			const cur = q.shift();

			for (const v of q) {
				if (cur.important < v.important) {
					q.push(cur);
					continue outer;
				}
			}

			if (cur.ogIndex === target) {
				answer.push(printed.length + 1);
				break;
			}

			printed.push(cur);
		}
	}
}

console.log(answer.join('\n'));

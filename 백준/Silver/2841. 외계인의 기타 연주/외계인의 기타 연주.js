const [n, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

const stackTable = {};

let result = 0;

for (const rhythm of input) {
	const [lope, fret] = rhythm.split(' ').map(Number);

	if (!stackTable[lope]) {
		result++;
		stackTable[lope] = [fret];
	} else {
		while (true) {
			const top = stackTable[lope].at(-1);
			if (!top) {
				result++;
				stackTable[lope] = [fret];
				break;
			}

			if (top < fret) {
				result++;
				stackTable[lope].push(fret);
				break;
			} else if (top === fret) {
				break;
			} else {
				stackTable[lope].pop();
				result++;
			}
		}
	}
}

console.log(result);

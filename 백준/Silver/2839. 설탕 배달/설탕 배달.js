const input = require('fs').readFileSync('./dev/stdin').toString().trim();

function solution() {
	let five = Math.floor(input / 5);
	let current = input - five * 5;

	while (true) {
		if (current % 3 === 0) break;

		five--;
		current += 5;
	}

	const three = current / 3;

	if (five < 0 || three < 0) {
		return -1;
	}

	return five + three;
}

console.log(solution());

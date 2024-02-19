let [a, b] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split(' ');

let answer = 0;

while (true) {
	if (b.at(-1) === '1') {
		b = b.slice(0, -1);
		answer++;
	} else {
		if (+b % 2 !== 0) {
			console.log(-1);
			break;
		}

		b = +b / 2;
		b = b.toString();
		answer++;
	}

	if (b === a) {
		console.log(answer + 1);
		break;
	}

	if (+b < +a) {
		console.log(-1);
		break;
	}
}

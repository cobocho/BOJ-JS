let [n, m, buttons] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

n = +n;
m = +m;
buttons = buttons ? buttons.split(' ').map(Number) : undefined;

function possible(numbers) {
	for (const v of String(numbers)) {
		if (buttons.includes(+v)) {
			return false;
		}
	}

	return true;
}

function solution() {
	let channel = 100;
	let field = '';
	let answer = Math.abs(n - channel);

	if (!buttons) {
		return Math.min(String(n).length, Math.abs(n - channel));
	}

	if (m === 10) {
		return Math.abs(n - channel);
	}

	if (channel === +n) {
		return 0;
	}

	let cursor = 0;

	while (true) {
		const plus = n + cursor;
		const minus = n - cursor;
		if (minus >= 0 && possible(minus)) {
			field = minus;
			break;
		}
		if (possible(plus)) {
			field = plus;
			break;
		}
		cursor++;
	}

	const tmp = String(field).length + Math.abs(+field - n);

	if (tmp < answer) {
		return tmp;
	} else {
		return answer;
	}
}

console.log(solution());

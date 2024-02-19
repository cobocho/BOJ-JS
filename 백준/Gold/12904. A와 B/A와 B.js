let [s, t] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');

while (true) {
	if (t.length === 0) {
		console.log(0);
		break;
	}

	if (t === s) {
		console.log(1);
		break;
	}

	if (t.at(-1) === 'B') {
		t = t.slice(0, -1);
		t = t.split('').reverse().join('');
		continue;
	}

	t = t.slice(0, -1);
}
